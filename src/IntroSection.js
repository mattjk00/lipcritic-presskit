import eye from './img/eye.png'

export function IntroSection() {
    return (
        <div className="section">
            <img className="eye" src={eye} alt="Logo"/>
            <h1 className="introText">
            Formed in 2018 in New York, Lip Critic is the project of Bret Kaser, Connor Kleitz, Danny Eberle, and Ilan Natter. The band is comprised of two samplers, two drummers and vocals. Through their unconventional instrumentation, Lip Critic executes an eclectic blend of punk, hardcore, club, modernistic pop sounds, and structures without inhibition. Paired with eccentric grandstand-style vocals, Lip Critic delivers a uniquely engaging live performance that rivals the hyper-stylized production on their records. These performances are heavily focused on improvisation and experimentation, including extended and remixed versions of songs, as well as band members attaching portable lights to their bodies. Their projects include "Kill Lip Critic" in 2019, "Lip Critic II" in 2020 and "Lip Critic: Truth Revealed" in 2021.
            </h1>
        </div>
    );
}