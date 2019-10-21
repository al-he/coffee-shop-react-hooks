import React from 'react';
import girl from '../../assets/images/coffee_girl.jpg';
import dark from '../../assets/images/Beans_logo_dark.svg';

const PageContent = () => {
    return (
        <div class="row">
            <div class="col-lg-4 offset-2">
                <img class="shop__girl" src={girl} alt="girl" />
            </div>
            <div class="col-lg-4">
                <div class="title">About our beans</div>
                <img class="beanslogo" src={dark} alt="Beans logo" />
                <div class="shop__text">
                    Extremity sweetness difficult behaviour he of. On disposal
                    of as landlord horrible.
                    <br />
                    <br />
                    Afraid at highly months do things on at. Situation recommend
                    objection do intention
                    <br />
                    so questions. <br />
                    As greatly removed calling pleased improve an. Last ask him
                    cold feel
                    <br />
                    met spot shy want. Children me laughing we prospect answered
                    followed. At it went
                    <br />
                    is song that held help face.
                </div>
            </div>
        </div>
    );
};

export default PageContent;
