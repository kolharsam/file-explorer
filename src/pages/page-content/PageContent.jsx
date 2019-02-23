import React, { Component } from 'react';
import Octicon, { FileMedia, FilePdf, FileDirectory, File, FileCode } from '@githubprimer/octicons-react';
import { withRouter } from 'react-router';

import Files from '../../files/files';

import '../../styles/pages.css';

class PrePageContent extends Component {
    constructor(props){
        super(props);

        this.state = {
            curPath: props.location.pathname,
            filesToRender: []
        }
        this.setFilesToRender = this.setFilesToRender.bind(this);
        this.iconSetter = this.iconSetter.bind(this);
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

    iconSetter(fileType, fileClass) {
        let returnIcon;

        if (fileType === 'folder') {
            returnIcon = (<Octicon icon={FileDirectory} height={72} width={51} />);
        } else if (fileType === 'file') { // although it is pretty obvious.
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
            return (
                <span className="icon">
                    {returnIcon}
                </span>
            );
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
                                    {this.iconSetter(content.type, content.class)}
                                    <span className="file-name">{content.filename}</span>
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