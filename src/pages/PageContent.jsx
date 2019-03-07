import React, { Component } from 'react';
import Octicon, { FileMedia, FilePdf, File, FileCode } from '@githubprimer/octicons-react';
import { withRouter } from 'react-router';

import '../styles/pages.css';
import folderImage from '../images/folder.png';

import firebase from '../firebase';

import SearchBar from '../components/helpers/SearchBar';
import Banner from '../components/helpers/Banner';

import AddNewFileFolder from '../components/helpers/AddNewFileFolder';

// helper components
import RightClickMenu from '../components/helpers/RightClickMenu';
import Fallback from '../components/fallback/Fallback'

class PrePageContent extends Component {
    constructor(props){
        super(props);

        this.state = {
            mainFilesObject: [],
            curPath: props.location.pathname,
            filesToRender: [],
            showMenu: [],
            searchText: '',
            fetchedFiles: false,
            notFoundResults: false,
        }

        this.handleOnSearchTextChange = this.handleOnSearchTextChange.bind(this);
        this.changeFilesToRender = this.changeFilesToRender.bind(this);

        this.setFilesToRender = this.setFilesToRender.bind(this);
        this.fileSetter = this.fileSetter.bind(this);

        // to handle Double Click
        this.handleDoubleClick = this.handleDoubleClick.bind(this);

        // to handle Right Click
        this.handleRightClick = this.handleRightClick.bind(this);
        this.handleClickElsewhere = this.handleClickElsewhere.bind(this);

        this.addToFiles = this.addToFiles.bind(this);
    }

    addToFiles = (path, newObject) => {
        let iterator = 0;

        let tempFiles = this.state.mainFilesObject;

        for (iterator = 0; iterator < tempFiles.length; iterator++) {
            if (tempFiles[iterator].path === path) {
                break;
            }
        }

        tempFiles[iterator].filesAndFoldersPresent.push(newObject);

        this.setState({ mainFilesObject: [...tempFiles] }, () => {
            console.log('Added a New File' + this.state.mainFilesObject[iterator]);
        });
    }

    setFilesToRender() {
        let currentElement = {};

        for (let iterator = 0; iterator < this.state.mainFilesObject.length; iterator++) {
            if (this.state.mainFilesObject[iterator].path === this.state.curPath) {
                currentElement = this.state.mainFilesObject[iterator];
                break;
            }
        }

        this.setState({
            filesToRender: [...currentElement.filesAndFoldersPresent]
        });
    }

    changeFilesToRender () {
        var searchResult = [];

        if (this.state.searchText.length > 0) {
            let tempFiles = this.state.filesToRender;
            
            searchResult = tempFiles.filter((file) => {
                return file.filename.includes(this.state.searchText) || file.filename === this.state.searchText;
            });
        }

        if (searchResult.length === 0) {
            this.setState({notFoundResults: true});
            this.setFilesToRender();
        } else {
            this.setState({filesToRender: [...searchResult], notFoundResults: false});
        }
    }

    handleOnSearchTextChange (e) {
        e.preventDefault();

        this.setState({searchText: e.target.value.toLowerCase().trim()}, () => {
            this.changeFilesToRender();
        });
    }

    componentDidMount() {
        firebase.database().ref().child('files').on('value', snap => {
            var tempFiles  = [];
            tempFiles = [...snap.val()];
            this.setState({mainFilesObject: tempFiles, fetchedFiles: true}, () => {
                this.setFilesToRender();
            });
        });
    }

    fileSetter(fileType, fileClass) {
        let returnIcon;

        if (fileType === 'folder') {
            returnIcon = (<img src={folderImage} alt="" />);
        } else if (fileType === 'file') { // although it is obvious.
            switch (fileClass) {
                case 'image':
                    returnIcon = (<Octicon icon={FileMedia} height={72} width={51} />);
                    break;
                case 'video':
                    returnIcon = (<Octicon icon={FileMedia} height={72} width={51} />);
                    break;
                case 'doc':
                    returnIcon = (<Octicon icon={File} height={72} width={51} />);
                    break;
                case 'text':
                    returnIcon = (<Octicon icon={File} height={72} width={51} />);
                    break;
                case 'pdf':
                    returnIcon = (<Octicon icon={FilePdf} height={72} width={51} />);
                    break;
                case 'audio':
                    returnIcon = (<Octicon icon={FileMedia} height={72} width={51} />);
                    break;
                default:
                    returnIcon = (<Octicon icon={FileCode} height={72} width={51} />);
                    break;
            }
        } else {
            alert('Error: Some unknown file type.');
        }

        if (returnIcon === undefined) {
            return undefined;
        } else {
            return returnIcon;
        }
    }

    handleDoubleClick(fileLink, event) {
        event.preventDefault();

        if (fileLink !== '') {
            this.props.history.push(fileLink);
        }
    }

    handleRightClick(event, index) {
        event.preventDefault();

        let tempArr = [];

        for (let iterator=0;iterator<this.state.filesToRender.length;iterator++) {
            tempArr[iterator] = false;
        }

        this.setState({
            showMenu: [...tempArr]
        });

        if (index >= 0) {
            tempArr[index] = true;
        }

        this.setState({
            showMenu: [...tempArr]
        }, () => {
            document.addEventListener("click", this.handleClickElsewhere, false);
        });
    }

    handleClickElsewhere (event) {
        event.preventDefault();

        let tempArr = [];

        for (let iterator = 0; iterator < this.state.filesToRender.length; iterator++) {
            tempArr[iterator] = false;
        }
        
        this.setState({showMenu: [...tempArr]}, () => {
            document.removeEventListener('click', this.handleClickElsewhere, false);
        })
    }


    render() {
        return(
            <React.Fragment>
                <SearchBar handlechange={e => this.handleOnSearchTextChange(e)} searchtext={this.state.searchText} />
                {this.state.fetchedFiles ? (
                    <React.Fragment>
                    {!this.state.notFoundResults ? null : <Banner text={this.state.searchText} />}
                        <div className="page-content">    
                            {
                                this.state.filesToRender.map((content, index) => {
                                    return (
                                        <div className="grid-item" key={index}>
                                            <div
                                                className={this.state.showMenu[index] ? "icon-blue" : "icon"}
                                                onDoubleClick={(e) => { this.handleDoubleClick(content.linkTo, e) }}
                                                onContextMenu={(e) => { this.handleRightClick(e, index) }}
                                            >
                                                {this.fileSetter(content.type, content.class)}
                                            </div>
                                            <span className="file-name">{content.filename}</span>
                                                <RightClickMenu 
                                                    show={this.state.showMenu[index]}
                                                    fileName={content.filename}
                                                    fileType={content.type}
                                                    fileSize={content.size}
                                                    fileClass={content.class}
                                                    fileCreatorName={content.creatorName}
                                                    fileCreatedDate={content.createdDate}
                                                    linkTo={content.linkTo} 
                                                />
                                        </div>
                                    )
                                })
                            }
                            <div className="grid-item">
                                <AddNewFileFolder addFile={this.addToFiles} />
                            </div>
                        </div>
                </React.Fragment>
            )
                : <Fallback />
            }
            </React.Fragment>
        );
    }
}

const PageContent = withRouter(PrePageContent);

export default PageContent;