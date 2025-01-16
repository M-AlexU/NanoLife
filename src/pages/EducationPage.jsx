import PropTypes from 'prop-types';

import closeButton from '../../public/assets/close_button.svg';

const EducationPage = ({ resetGameMode }) => {

    const resetMode = () => resetGameMode();

    return(
        <div className="game-wrapper">
            <div className="game-content-settings-education page">
                <img onClick={resetMode} className='close-button' src={closeButton} alt="X" />
                <h1 className='page-header'>Invata despre Nanozostera!</h1>
                <p className='education-paragraph'>
                    Mai mult decât o simplă plantă care aduce beneficii comunităților de coastă, Zostera marina
                    este o resursă valoroasă pentru susținerea biodiversității, protejarea țărmurilor și lupta împotriva
                    schimbărilor climatice.
                </p>
                <p className='education-paragraph'>
                    Nanozostera este o specie de iarbă marină de talie mică, caracterizată prin frunze verzi și
                    subțiri, care pot atinge lungimi între 5 și 15 cm.
                </p>
                <p className="education-paragraph">
                    Nanozostera are un sistem de rădăcini și rizomi (tulpini subterane) care se extind în sedimentele
                    marine, formând o rețea densă ce ajută la stabilizarea solului marin.
                </p>
                <p className="education-paragraph">
                    Nanostera marina are o istorie evolutivă complexă și fascinantă. Provenind din algele marine
                    primitive, această specie a trecut printr-o tranziție evolutivă extraordinară, mutându-se mai întâi
                    pe uscat și apoi revenind în mediul marin.
                </p>
                <p className="education-paragraph">
                    Procesul de „evoluție inversă” a cerut ca Nanozostera marina să se readapteze la mediul acvatic,
                    făcând față unor noi condiții de salinitate, lumină și nutrienți esențiali pentru supraviețuire.
                </p>
                <p className="education-paragraph">
                    Salvarea Zosterei marina este esențială pentru protejarea ecosistemelor de coastă.
                </p>
                <p className="education-paragraph">
                    Intervențiile
                    de restaurare ecologică, reglementarea activităților umane și îmbunătățirea calității apei se
                    numără printre cele mai urgente măsuri.
                </p>
                <p className="education-paragraph">
                    Cu toate acestea, în ultimele decenii, populatiile de Nanozostera din Marea Neagră au fost
                    afectate semnificativ de activitățile umane.
                </p>
                <p className="education-paragraph">
                    Nanozostera marina preferă apele puțin adânci, de până la 1-3 metri adâncime, și este adesea
                    întâlnită în apropierea țărmurilor nisipoase sau nămoloase.
                </p>
                <p className="education-paragraph">
                    În Marea Neagră, pajiștile subacvatice sunt localizate în special în golfuri și estuare, unde
                    apele sunt protejate de valuri puternice și unde sedimentul permite înrădăcinarea.
                </p>
                <p className="education-paragraph">
                    Delta Dunării – Este una dintre cele mai importante zone de biodiversitate din Marea Neagră,
                    unde pajiștile de Nanozostera contribuiau la menținerea unui ecosistem sănătos, având rolul de
                    a fixa sedimentele și de a reduce turbiditatea apei.
                </p>
                <p className="education-paragraph">
                    Litoralul românesc și bulgăresc – În special în zonele cu ape mai puțin adânci, Nanozostera
                    poate fi întâlnită în apropierea malului, în golfurile protejate și în zonele umede costiere, acolo
                    unde sedimentul marin oferă un substrat stabil pentru rădăcinile și rizomii săi.
                </p>
                <p className="education-paragraph">
                    Zonele estuariene – Estuarele sunt locuri unde apa dulce se întâlnește cu apa sărată a mării,
                    creând un habitat ideal pentru Nanozostera.
                </p>
                <p className="education-paragraph">
                    În aceste zone, salinitatea variază, iar Nanozostera
                    este capabilă să supraviețuiască într-un spectru de salinitate destul de larg.
                </p>
                <p className="education-paragraph">
                    Nanozostera contribuie la reducerea cantității de CO₂ dizolvat în apă și ajută la combaterea
                    schimbărilor climatice prin fixarea carbonului.
                </p>
                <p className="education-paragraph">
                    Absorbția de CO₂ produsă de Nanozostera este benefică în Marea Neagră, unde riscul de
                    eutrofizare este ridicat.
                </p>
            </div>
        </div>
    )
}

export default EducationPage;

EducationPage.propTypes = {
    resetGameMode: PropTypes.func
}