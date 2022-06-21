import React, { Fragment, useState } from 'react';

export const FormStars = ({setLte, setGte}) => {

    let [arrayStarClass, setArrayStarClass] = useState(['custom', 'custom', 'custom', 'custom', 'custom'])

    const handleClick = (event) => {
        switch(event.target.id){
            case 'star1':
                setArrayStarClass(['yellow', 'custom', 'custom', 'custom', 'custom']);
                setLte(2);
                setGte(0);
                break;
            case 'star2':
                setArrayStarClass(['yellow', 'yellow', 'custom', 'custom', 'custom']);
                setLte(4);
                setGte(2);
                break;
            case 'star3':
                setArrayStarClass(['yellow', 'yellow', 'yellow', 'custom', 'custom']);
                setLte(6);
                setGte(4);
                break;
            case 'star4':
                setArrayStarClass(['yellow', 'yellow', 'yellow', 'yellow', 'custom']);
                setLte(8);
                setGte(6);
                break;
            case 'star5':
                setArrayStarClass(['yellow', 'yellow', 'yellow', 'yellow', 'yellow']);
                setLte(10);
                setGte(8);
                break;
        }
        if(event.target.className=='yellow'){
            setArrayStarClass(['custom', 'custom', 'custom', 'custom', 'custom']);
            setLte(10);
            setGte(0);
        }
    }

    return(
        <Fragment>
            <div className="stars">
                <label onClick={handleClick} id="star1" className={arrayStarClass[0]}>★</label>
                <label onClick={handleClick} id="star2" className={arrayStarClass[1]}>★</label>
                <label onClick={handleClick} id="star3" className={arrayStarClass[2]}>★</label>
                <label onClick={handleClick} id="star4" className={arrayStarClass[3]}>★</label>
                <label onClick={handleClick} id="star5" className={arrayStarClass[4]}>★</label>
            </div>
        </Fragment>
    )
}