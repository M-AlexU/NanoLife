import triangle from '../../public/assets/triangle_gray.svg';
import closeButton from '../../public/assets/close_button.svg';

import PropTypes from 'prop-types';

const SettingsPage = ({isChecked, onCheckboxChange, resetGameMode}) => {
    const handleChange = (event) => {
        onCheckboxChange(event.target.checked);
    }

    const resetMode = () => resetGameMode();

    return(
        <div className="game-wrapper">
            <div className="game-content-game page">
                <img onClick={resetMode} className='close-button' src={closeButton} alt="X" />
                <div>
                    <h1 className="page-header">Sunet & Notificari</h1>
                    <div className="settings-content">
                        <label htmlFor='audio-checkbox' className="settings-label">🔊 Musica de fundal</label>
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
                        <label htmlFor='reminder-checkbox' className="settings-label">🔔 Notificari</label>
                        <div className="checkbox-wrapper">
                            <input id='reminder-checkbox' type="checkbox" className="settings-checkbox" />
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="page-header">Personalizare</h1>
                    <div className="settings-content">
                        <span className="settings-label">⚠️ Resetare progres</span>
                    </div>
                </div>
                <div>
                    <h1 className="page-header">Resurse educationale</h1>
                    <a href='https://en.wikipedia.org/wiki/Zostera_marina' target='_blank' className="settings-content">
                        <span className="settings-label">📘 Discopera Nanozostera</span>
                        <img 
                            src={triangle} 
                            alt="Next" 
                            className="settings-arrow" 
                        />
                    </a>
                </div>
                <div>
                    <h1 className="page-header">Informatii despre joc</h1>
                    <a href='https://google.com' target='_blank' className="settings-content">
                        <span className="settings-label">🏆 Despre competitie</span>
                        <img 
                            src={triangle} 
                            alt="Next" 
                            className="settings-arrow" 
                        />
                    </a>
                    <div className="settings-content">
                        <span className="settings-label version-text">⚙️ Versiune: 1.0.0</span>
                    </div>
                </div>
                <div>
                    <h1 className="page-header">Despre</h1>
                    <a href='https://www.instagram.com/tehnozlb' target='_blank'  className="settings-content">
                        <span className="settings-label">❤️ Meet the team</span>
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
    onCheckboxChange: PropTypes.func,
    resetGameMode: PropTypes.func
}