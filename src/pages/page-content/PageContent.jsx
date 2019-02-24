import React, { Component } from 'react';
import Octicon, { FileMedia, FilePdf, FileDirectory, File, FileCode } from '@githubprimer/octicons-react';
import { withRouter } from 'react-router';

import Files from '../../files/files';
import '../../styles/pages.css';

// helper components
import RightClickMenu from '../../components/helpers/RightClickMenu';

class PrePageContent extends Component {
    constructor(props){
        super(props);

        this.state = {
            curPath: props.location.pathname,
            filesToRender: [],
            showMenu: [],
        }
        this.setFilesToRender = this.setFilesToRender.bind(this);
        this.fileSetter = this.fileSetter.bind(this);

        // to handle Double Click
        this.handleDoubleClick = this.handleDoubleClick.bind(this);

        // to handle Right Click
        this.handleRightClick = this.handleRightClick.bind(this);
        this.handleClickElsewhere = this.handleClickElsewhere.bind(this);
    }

    setFilesToRender() {
        let currentElement = {};

        for (let iterator = 0; iterator < Files.length; iterator++) {
            if (Files[iterator].path === this.state.curPath) {
                currentElement = Files[iterator];
                break;
            }
        }

        this.setState({
            filesToRender: [...currentElement.filesAndFoldersPresent]
        });
    }

    componentWillMount() {
        this.setFilesToRender();
    }

    fileSetter(fileType, fileClass) {
        let returnIcon;

        if (fileType === 'folder') {
            returnIcon = (<Octicon icon={FileDirectory} height={72} width={51} />);
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

        //console.log(this.state.filesToRender[index]);

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

        if (this.state.showMenu) {
            this.setState({showMenu: [...tempArr]}, () => {
                document.removeEventListener('click', this.handleClickElsewhere, false);
            });
        }
    }


    render() {
        return(
            <React.Fragment>
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
                                    {
                                        this.state.showMenu[index] ? 
                                            <RightClickMenu 
                                                show={this.state.showMenu[index]}
                                                fileName={content.filename}
                                                fileType={content.type}
                                                fileSize={content.size}
                                                fileCreatorName={content.creatorName}
                                                fileCreatedDate={content.createdDate}
                                                linkTo={content.linkTo} 
                                            /> 
                                        : 
                                            undefined
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </React.Fragment>
        );
    }
}

const PageContent = withRouter(PrePageContent);

export default PageContent;