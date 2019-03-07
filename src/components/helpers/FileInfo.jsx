import React from "react";
import PropTypes from 'prop-types';

import Octicon, { FileMedia, FilePdf, File, FileCode } from '@githubprimer/octicons-react';

import "../../styles/file-info.css";

import folderImg from '../../images/folder.png'

class FileInfoPopup extends React.Component {

    returnFileIcon (filetype) {
        let returnIcon;

        switch (filetype) {
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
        return returnIcon;
    }

    render() {
        return (
                this.props.show ? 
            (
            <div className="popup_file">
                <div className="popup_file_inner">
                    <div className="top_file">
                        <h4 className="heading_file">{this.props.text}</h4>
                        <button className="closeButton_file" onClick={this.props.closePopup}>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    <div className="file_icon">
                        {this.props.filetype === 'folder' ? <img src={folderImg} alt="" /> : this.returnFileIcon(this.props.fileclass)}
                    </div>
                    <div className="descriptions">
                            <span className="identifier">
                                File: 
                            </span>
                            <span className="id_value">
                                {this.props.filename}
                            </span>
                            <span className="identifier">
                                Size:
                            </span>
                            <span className="id_value">
                                {this.props.filesize}
                            </span>
                            <span className="identifier">
                                Creator Name:
                            </span>
                            <span className="id_value">
                                {this.props.filecreator}
                            </span>
                            <span className="identifier">
                                Creator Date:
                            </span>
                            <span className="id_value">
                                {this.props.filecreated}
                            </span>
                        </div>
                    </div>
                </div>) : null
        );
    }
}

FileInfoPopup.propTypes = {
    text: PropTypes.string.isRequired,
    closePopup: PropTypes.func.isRequired,
};

export default FileInfoPopup;