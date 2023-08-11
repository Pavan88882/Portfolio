import React from 'react';

const ToolsSkills = ({ skills }) => {
    return (
        <div className="skills-panel">
            <h2 className="skills-panel-title">Tools</h2>
            {skills.map(skill => (
                <div className="skills__data" key={skill.id}>
                    <div className="skills__names">
                        <i className={`bx ${skill.icon_name} skills__icon`}></i>
                        <span className="skills__name">{skill.skill_name}</span>
                    </div>
                    <div className="skills__bar skills__html"></div>
                </div>
            ))}
        </div>
    );
};

export default ToolsSkills;
