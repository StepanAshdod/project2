import React from "react";
import style from "./Team.css";
import team_photo from '../../../images/Zuckerberg.jpg';

export const Team = () => {
        const employees = [
            {id: 1, name: "Dr.Igor Karasin", position: "Co-Founder", description: "Bla-bla-bla", photo: ''},
            {id: 2, name: "Just.Gabi Karasin", position: "Co-Founder", description: "Bla-bla-bla", photo:''},
            {id: 3, name: "Prof.Kevin Manning", position: "Advisor", description: "Bla-bla-bla", photo: ''}
        ];
    
        const itemTeam = employees.map(employee => {
            return <div key={employee.id} className={'team_item'}>
                <div className={'team_item_wrapper'}>
                    <div className={'team_background'}>
                        <div className={'background_oval_1'}></div>
                        <div className={'background_oval_2'}></div>
                        <div className={'background_oval_2_1'}></div>
                        <div className={'background_oval_3'}></div>
                        <div className={'background_oval_3_1'}></div>
                        <div className={'background_oval_3_2'}></div>
                        <div className={'background_oval_3_3'}></div>
                        <div className={'background_oval_3_4'}></div>
                        <div className={'background_oval_3_5'}></div>
                        <div className={'background_oval_3_6'}></div>
                        <div className={'background_oval_3_7'}></div>
                        <div className={'background_oval_3_8'}></div>
                        <div className={'background_oval_3_9'}></div>
                        <div className={'background_oval_3_10'}></div>
                        <div className={'background_oval_3_11'}></div>
                        <div className={'background_oval_3_12'}></div>
                        <div className={'team_photo_wrapper'}>
                            <div className={'team_photo'}>
                            <img src={team_photo} alt=""></img>
                            </div>
                        </div>
                        <div className={'team_info'}>
                            <span className={'team_info_title'}>{employee.name}</span>
                            <span className={'team_info_subtitle'}>{employee.position}</span>
                        </div>
                        <div className={'team_info_description'}>
                            So how did the classical Latin become so incoherent? 
                            According to McClintock, l
                            scrambled part of Cicero's in order to provide 
                            placeholder text to mockup various fonts for a 
                            type specimen book. </div>
                    </div>
                </div>
            </div>
        })
        return <React.Fragment>
            <div className={'team'}>
                <div className={'team_header'}>
                    <div className={'team_header_strip'}>
                        <div/>
                    </div>
                    <span className={'team_header_title'}>The Team </span>
                </div>
                <div className={'team_body'}>
                    <div className={'team_items'}>
                        {itemTeam}
                    </div>
                </div>
            </div>
        </React.Fragment>
    }

