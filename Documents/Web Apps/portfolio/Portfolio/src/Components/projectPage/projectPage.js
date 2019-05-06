import React, { Component } from 'react';
import './projectPage.css';
import { Accordion, AccordionItem } from 'react-sanfona';
import ImageZoom from 'react-medium-image-zoom';





class projectPage extends Component {

    constructor(props) {
        super(props);



        this.state = {
            project: props.project,
            imgIndex: 0
        }

        this.imgIndex = this.imgIndex.bind(this);
    }

    imgIndex = (arrow) => {

        if (arrow === 'left') {
            if (this.state.imgIndex === 0) {
                this.setState({
                    imgIndex: 2
                })
            }
            else {
                this.setState({
                    imgIndex: this.state.imgIndex - 1
                })
            }
        }

        if (arrow === 'right') {
            if (this.state.imgIndex === 2) {
                this.setState({
                    imgIndex: 0
                })
            }
            else {
                this.setState({
                    imgIndex: this.state.imgIndex + 1
                })
            }
        }
    }

    changeImg = (pg) => {
        this.setState({
            imgIndex: pg
        })
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.project.name !== nextProps.project.name) {


            this.setState({
                project: nextProps.project
            })
        }
    }

    render() {
        const { project } = this.props
        let imgArray = [{ img: project.img, info: project.info }, ...project.snips]
        return (
            <div id='projectPage'>
                <div id='leftContainer'>



                    <div className='accordion'>
                        <div className='projectTitle'> {this.state.project.name}</div>
                        <div> 
                            {['Purpose', 'Technology', 'Github', 'View App'].map((item) => {
                                return (
                                    <div title={item} slug={item} key={item}>
                                        <div className='accordionDiv'>
                                            {item === 'Purpose' ? <p>Purpose: {this.state.project.info}</p> : null}
                                            {item === 'Technology' ? <p>Stack: {this.state.project.technology}</p> : null}
                                            {item === 'Github' ? <a href={this.state.project.links.github} target="_blank">Github Project</a> : null}
                                            {item === 'View App' ? <a href={this.state.project.links.azure} target="_blank">Hosted App</a> : null}
                                        </div>
                                    </div>
                                   

                                );
                            })}
                           
                        </div>
                    </div>
                </div>

                <div id='rightContainer'>

                    <div id='slideshow'>
                    <div className="fa fa-angle-double-left" aria-hidden="true" onClick={() => { this.imgIndex('left') }} ></div>
               
                        <div>
                            {/* <img className='projectImg' alt='projectImg' src={imgArray[this.state.imgIndex].img} /> */}
                            <ImageZoom
                                image={{
                                    src: imgArray[this.state.imgIndex].img,
                                    alt: 'project',
                                    className: 'projectImg',
                                    style: { width: '50em' }
                                }}
                                zoomImage={{
                                    src: imgArray[this.state.imgIndex].img,
                                    alt: 'Golden Gate Bridge'
                                }}
                            />
                        </div>
                        <div className="fa fa-angle-double-right" aria-hidden="true" onClick={() => { this.imgIndex('right') }} ></div>
                    </div>

                    <div id='imgInfo'><p>{imgArray[this.state.imgIndex].info}</p></div>
                    <div id='pagination'>
                        <div
                            className={this.state.imgIndex === 0 ? 'pagination active' : 'pagination'}
                            onClick={() => { this.changeImg(0) }}>
                        </div>
                        <div
                            className={this.state.imgIndex === 1 ? 'pagination active' : 'pagination'}
                            onClick={() => { this.changeImg(1) }}>
                        </div>
                        <div
                            className={this.state.imgIndex === 2 ? 'pagination active' : 'pagination'}
                            onClick={() => { this.changeImg(2) }}>
                        </div>
                    </div>

                </div>



            </div>
        );
    }
}

export default projectPage;