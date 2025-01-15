import triangle from '../../public/assets/triangle_gray.svg';

import PropTypes from 'prop-types';

const SettingsPage = ({isChecked, onCheckboxChange}) => {
    const handleChange = (event) => {
        onCheckboxChange(event.target.checked);
    }

    return(
        <div className="game-wrapper">
            <div className="game-content-game settings-page">
                <div>
                    <h1 className="settings-header">Sound & Notifications</h1>
                    <div className="settings-content">
                        <label htmlFor='audio-checkbox' className="settings-label">🔊 Background Music & Sound Effects</label>
                        <div className="checkbox-wrapper">
                            <input 
                                id='audio-checkbox'
                                type="checkbox" 
                                className="settings-checkbox" 
                                checked={isChecked} 
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="settings-content">
                        <label htmlFor='reminder-checkbox' className="settings-label">🔔 Daily Care Reminder</label>
                        <div className="checkbox-wrapper">
                            <input id='reminder-checkbox' type="checkbox" className="settings-checkbox" />
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="settings-header">Customization</h1>
                    <div className="settings-content">
                        <span className="settings-label">⚠️ Reset Progress</span>
                    </div>
                </div>
                <div>
                    <h1 className="settings-header">EDUCATIONAL RESOURCES</h1>
                    <a href='https://en.wikipedia.org/wiki/Zostera_marina' target='_blank' className="settings-content">
                        <span className="settings-label">📘 Discover Nanozostera</span>
                        <img 
                            src={triangle} 
                            alt="Next" 
                            className="settings-arrow" 
                        />
                    </a>
                </div>
                <div>
                    <h1 className="settings-header">GAME INFORMATION</h1>
                    <a href='https://google.com' target='_blank' className="settings-content">
                        <span className="settings-label">🏆 About the Competition</span>
                        <img 
                            src={triangle} 
                            alt="Next" 
                            className="settings-arrow" 
                        />
                    </a>
                    <div className="settings-content">
                        <span className="settings-label version-text">⚙️ Version: 1.0.0</span>
                    </div>
                </div>
                <div>
                    <h1 className="settings-header">About</h1>
                    <a href='https://www.instagram.com/tehnozlb' target='_blank'  className="settings-content">
                        <span className="settings-label">❤️ Meet the Team</span>
                        <img 
                            src={triangle} 
                            alt="Next" 
                            className="settings-arrow" 
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SettingsPage;

SettingsPage.propTypes = {
    isChecked: PropTypes.bool,
    onCheckboxChange: PropTypes.func
}