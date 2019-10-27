import React, { useContext, useEffect } from 'react';
import Banner from '../banner';
import PageContent from '../page-content';
import Footer from '../footer';
import PageList from './page-list';
import { CoffeeContext } from '../../context/coffee/coffeeContext';
import { Redirect } from 'react-router-dom';

import girl from '../../assets/images/coffee_girl.jpg';
import girl2 from '../../assets/images/goods-girl.png';

const Coffee = props => {
    const {
        coffee,
        loading,
        error,
        getCoffee,
        clickFilter,
        filter,
        changeInput,
    } = useContext(CoffeeContext);

    const clearInput = () => {
        document.querySelector('#filter').value = '';
    };

    useEffect(() => {
        getCoffee(props.match.params.name);
        clearInput();
        // eslint-disable-next-line
    }, [props.match.params.name]);

    if (!coffee) {
        return <Redirect to="/not-found/" />;
    }

    const img = props.match.params.name === 'coffee' ? girl : girl2;
    const page = props.match.url.match(/\/([^|]*)\//)
        ? props.match.url.match(/\/([^|]*)\//)[1]
        : null;
    const clazz = page === 'goods' ? 'goods-banner' : null;

    const title =
        props.match.params.name === 'coffee'
            ? 'Our Coffee'
            : 'For your pleasure';

    const filterHandler = e => {
        if (e.target.matches('button')) {
            clearInput();
            clickFilter(e.target.textContent.toLowerCase());
        }
    };

    const searchHandler = e => {
        changeInput(e.target.value.toLowerCase());
    };

    return (
        <>
            <Banner title={title} bg={clazz} />
            <section className="shop">
                <div className="container">
                    <PageContent img={img} />
                    <div className="line"></div>
                    <div className="row">
                        <div className="col-lg-5 offset-1">
                            <form action="#" className="shop__search">
                                <label
                                    className="shop__search-label"
                                    htmlFor="filter">
                                    Looking for
                                </label>
                                <input
                                    id="filter"
                                    type="text"
                                    placeholder="start typing here..."
                                    className="shop__search-input"
                                    onChange={searchHandler}
                                />
                            </form>
                        </div>
                        <div className="col-lg-5">
                            <div className="shop__filter">
                                <div className="shop__filter-label">
                                    Or filter
                                </div>
                                <div
                                    className="shop__filter-group"
                                    onClick={filterHandler}>
                                    <button className="shop__filter-btn">
                                        All
                                    </button>
                                    <button className="shop__filter-btn">
                                        Brazil
                                    </button>
                                    <button className="shop__filter-btn">
                                        Kenya
                                    </button>
                                    <button className="shop__filter-btn">
                                        Columbia
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <PageList
                                coffee={filter.length ? filter : coffee}
                                loading={loading}
                                error={error}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export { Coffee };
