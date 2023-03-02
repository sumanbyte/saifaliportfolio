import React from 'react'
import ChangeUIButton from '../good_ui/ChangeUIButton'
import Socials from './Bad_Socials'

const Bad_Projects = ({verticalsocials}) => {
    return (
        <>
            <ChangeUIButton />
            {verticalsocials && <Socials verticalsocials={verticalsocials} />}
            <div className='bad-projects'>
                <div className="bad-project-cont">
                    <div className="bad-project">
                        <div className="bad-project-texts">
                            <p className='bad-project-head bad-font'>Build a Doctor Connected App</p>
                            <p className='bad-project-p bad-font'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sint et distinctio fugit ducimus quae praesentium incidunt voluptatibus, officiis dicta sapiente repellendus reiciendis eaque modi maiores fuga voluptatem, tempore suscipit architecto ut delectus numquam?</p>
                        </div>
                        <div className="bad-project-img">
                            <img src={require('../../img/project-img.png')} alt="project-img" width="200" />
                        </div>
                    </div>
                    <div className="bad-project-utils">
                        <div className="bad-project-tools">
                            <p className='bad-font'>Tools</p>
                            <p className='bad-font'>Figma</p>
                            <p className='bad-font'>PhotoPea</p>
                            <p className='bad-font'>Inkscape</p>
                        </div>
                        <div className="bad-project-btn">
                            <button className='bad-btn '>View Project</button>
                        </div>
                    </div>
                </div>
                <div className="bad-project-cont">
                    <div className="bad-project">
                        <div className="bad-project-texts">
                            <p className='bad-project-head bad-font'>Build a Doctor Connected App</p>
                            <p className='bad-project-p bad-font'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sint et distinctio fugit ducimus quae praesentium incidunt voluptatibus, officiis dicta sapiente repellendus reiciendis eaque modi maiores fuga voluptatem, tempore suscipit architecto ut delectus numquam?</p>
                        </div>
                        <div className="bad-project-img">
                            <img src={require('../../img/project-img.png')} alt="project-img" width="200" />
                        </div>
                    </div>
                    <div className="bad-project-utils">
                        <div className="bad-project-tools">
                            <p className='bad-font'>Tools</p>
                            <p className='bad-font'>Figma</p>
                            <p className='bad-font'>PhotoPea</p>
                            <p className='bad-font'>Inkscape</p>
                        </div>
                        <div className="bad-project-btn">
                            <button className='bad-btn '>View Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bad_Projects