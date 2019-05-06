import React, { Component } from 'react';
import './Projects.css';
import ProjectDiv from '../projectDiv';
import ProjectPage from '../projectPage';

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            activeProject: '',
            projects: [
                {
                    id: 1,
                    name: 'Memory Game (React)',
                    img: '/assets/images/memoryGame/memoryGame1.gif',
                    info: 'This is a game where you must click all 12 faces without selecting any twice.',
                    technology: 'React.js, Javascript, HTML/CSS',
                    links:
                    {
                        github: 'https://github.com/jkral1102/React-Memory-Game/blob/master/README.md',
                        azure: 'https://reactmemorygame.azurewebsites.net'
                    }
                    ,
                    snips:
                        [
                            {
                                img: '/assets/images/memoryGame/memoryGame2.PNG',
                                info: 'General App.js structure. Includes the following components: Header, FriendCard, and conditional rendering of the WonGame component.'
                            },
                            {
                                img: '/assets/images/memoryGame/memoryGame3.PNG',
                                info: 'A stateless functional component is used to render the game cards (faces).'
                            }
                        ],

                },
                {
                    id: 2,
                    name: 'New York Times Search (React, Node, MongoDB)',
                    img: '/assets/images/nytSearch/nytGif.gif',
                    info: 'This web app allows a user to saved and comment on articles pulled from the New York Times API.',
                    technology: 'Front end: React, Javascript, HTML/CSS. Back end: Node.js, Express.js. Database: MongoDB',
                    links:
                    {
                        github: 'https://github.com/jkral1102/NYT-React-Search',
                        azure: 'https://nytreactsearch.azurewebsites.net/'
                    }
                    ,
                    snips:
                        [
                            {
                                img: '/assets/images/nytSearch/nytSearch1.PNG',
                                info: 'An ajax call is made using Axios to pull article data from the NYT API. '
                            },
                            {
                                img: '/assets/images/nytSearch/nytSearch2.PNG',
                                info: 'A javascript array map method is used to pass information as props to the Articles component, allowing it to render and use the data as needed. '
                            }
                        ],
                },
                {
                    id: 3,
                    keywords: ['Redux', 'React.js', 'Eventful API', 'OpenWeather API', 'Bing News API', 'Node.js', 'Express.js', 'Javascript', 'HTML/CSS'],
                    name: 'City Dashboard (React, Redux)',
                    img: '/assets/images/cityDashboard/city.gif',
                    info: 'This web app allows a user to type in a city name and pull relevant data on weather, news headlines, and local events.',
                    technology: 'Redux, React, Javascript, HTML/CSS, Node.js, Express.js, OpenWeather API, Bing News API, Eventful API',
                    links:
                    {
                        github: 'https://github.com/jkral1102/Redux-City-Dashboard',
                        azure: 'https://citydashboard.azurewebsites.net'
                    }
                    ,
                    snips:
                        [
                            {
                                img: '/assets/images/cityDashboard/city1.PNG',
                                info: 'Global app data from the store is being retrieved and set to Props for component access and use'
                            },
                            {
                                img: '/assets/images/cityDashboard/city2.PNG',
                                info: 'A redux action is created to make an api call that fetches events from the database.'
                            }
                        ],
                },
                {
                    id: 4,
                    keywords: ['Javascript', 'jQuery', 'HTML/CSS', 'Sequelize', 'Postgresql', 'Google Location API', 'Yelp API', 'Node.js/Express'],
                    name: 'LunchLotto (Javascript, jQuery)',
                    img: '/assets/images/lunchlotto/lotto.PNG',
                    info: 'This app allows you to form a group where members can add restaurant suggestions and it selects a random restaurant.',
                    technology: 'Javascript, jQuery, HTML/CSS, Sequelize, Node.js, Express.js, Postgresql, Google Location API, Yelp API',
                    links:
                    {
                        github: 'https://github.com/jkral1102/LunchLotto.git',
                        azure: 'https://lunchlottojkral.herokuapp.com/'
                    }
                    ,
                    snips:
                        [
                            {
                                img: '/assets/images/cityDashboard/city1.PNG',
                                info: 'Global app data from the store is being retrieved and set to Props for component access and use'
                            },
                            {
                                img: '/assets/images/cityDashboard/city2.PNG',
                                info: 'A redux action is created to make an api call that fetches events from the database.'
                            }
                        ],
                
                }
            ]
        }
        this.displayProject = this.displayProject.bind(this);
        this.removeActive = this.removeActive.bind(this);
    }

    displayProject = (id) => {
        let newProject = this.state.projects.find(item => {
            return item.id === id
        })
        this.setState({ activeProject: newProject });
    }

    removeActive = () => {
        this.setState({
            activeProject: ''
        })
    }


    render() {
        let projectDivs = this.state.projects.map((item, index) => (
            <ProjectDiv
                id={item.id}
                name={item.name}
                img={item.img}
                description={item.description}
                display={this.displayProject}
            />
        ))
        let projects = this.state.activeProject !== '' ?
            <div>
                {/* <div className='shortcutMenu'>
                    <div className='iconDiv'>
                        <div className='icons' onClick={this.removeActive}>All</div>
                        <div
                            className={this.state.activeProject.id === 1 ? 'icons active ' : 'icons'}
                            onClick={() => { this.displayProject(1) }}
                        ><span>1</span></div>
                        <div
                            className={this.state.activeProject.id === 2 ? 'icons active ' : 'icons'}
                            onClick={() => { this.displayProject(2) }}
                        ><span>2</span></div>
                        <div
                            className={this.state.activeProject.id === 3 ? 'icons active ' : 'icons'}
                            onClick={() => { this.displayProject(3) }}
                        ><span>3</span></div>
                    </div>
                </div> */}

                <ProjectPage
                    project={this.state.activeProject}
                />  </div> : projectDivs

        return (
            // <div className="projects">
            //     <div className='projectsHeader'>Projects</div>

            //     <div className='projectDivs'>{projects}</div>


            // </div>
            <React.Fragment>
            <div className='projectsHeader'>Projects</div>
            
            <div className='projectWrapper'>
                <div className='projectInfo'>Project 1 Info</div>
                <div className='projectImg'>Img</div>
            </div>

            <div className='projectWrapper'>
                <div className='projectImg'>Img</div>
                <div className='projectInfo'>Project 1 Info</div>
               
            </div>

            </React.Fragment>
        );
    }
}

export default Projects;