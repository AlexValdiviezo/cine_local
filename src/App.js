import React, { Fragment, useEffect, useState } from 'react';
import { InputMovie } from './components/InputMovie';
import { ModalMovie } from './components/ModalMovie';
import { getMovies } from './helper/getMovies';

export const App = () => {
    const [gte, setGte] = useState(0);
    const [lte, setLte] = useState(10);
    const [input, setInput] = useState(''); 
    const [movie, setMovie] = useState([{}]);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalSrcImg, setModalSrcImg] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    const [modalDesc, setModalDesc] = useState('');

    useEffect(()=>{
        const result = async() => {
            let resp = await getMovies(input, gte, lte);
            setMovie(resp);
        }
        result();
    }, [input, lte, gte]);

    const handleClick = (title, srcImg, desc) => {
        setModalOpen(true);
        setModalTitle(title);
        setModalSrcImg(srcImg);
        setModalDesc(desc);
    }

    return(
        <Fragment>
            <h2>Cine Local</h2>
            <InputMovie setInput={setInput} setLte={setLte} setGte={setGte}/>
            <hr />
            <div className='card-grid' key='card-grid'>
                {
                    movie.map(e=>{
                        return(
                            <>
                                <div key={e.name} className='card' onClick={()=>{handleClick(e.name, e.img, e.overview)}}>
                                    <img src={e.img}></img>
                                    <p>{e.name}</p>    
                                 </div>
                            </>
                        )
                    })
                }
            </div>
            <ModalMovie open={modalOpen} setModalOpen={setModalOpen} title={modalTitle} srcImg={modalSrcImg} desc={modalDesc}/>
                   
            </Fragment>
    )
}