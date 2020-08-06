import React, { useState } from 'react';
import './PlaceItem.css';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import Map from '../../shared/components/UIElements/Map';

const PlaceItem = ({ place }) => {
    const [showMap, setShowMap] = useState(false);

    const toggleMapHandler = () => {
        setShowMap(!showMap);
    };

    const [showDelete, setShowDelete] = useState(false);

    const toggleDeleteHandler = () => {
        setShowDelete(!showDelete);
    };

    const cancelHandler = () => {
        setShowDelete(false);
    };

    const deleteHandler = () => {
        //TEMPORALLY
        alert('DELETING');
    };

    const {
        id,
        image,
        title,
        description,
        address,
        creatorId,
        coordinates,
    } = place;
    return (
        <>
            <Modal
                show={showMap}
                onCancel={toggleMapHandler}
                header={address}
                contentClass='place-item__modal-content'
                footerClass='place-item__modal-actions'
                footer={<Button onClick={toggleMapHandler}>CLOSE</Button>}
            >
                <div className='map-container'>
                    <Map center={coordinates} zoom={16} />
                </div>
            </Modal>
            <Modal
                show={showDelete}
                onCancel={toggleDeleteHandler}
                header='Are you sure?'
                footerClass='place-item__modal-actions'
                footer={
                    <>
                        <Button inverse onClick={cancelHandler}>
                            CANCEL
                        </Button>
                        <Button danger onClick={deleteHandler}>
                            DELETE
                        </Button>
                    </>
                }
            >
                <p>Do you want to delete this place?</p>
            </Modal>
            <li className='place-item'>
                <Card className='place-item__content'>
                    <div className='place-item__image'>
                        <img src={image} alt={title} />
                    </div>
                    <div className='place-item__info'>
                        <h2>{title}</h2>
                        <h3>{address}</h3>
                        <p>{description}</p>
                    </div>
                    <div className='place-item__actions'>
                        <Button inverse onClick={toggleMapHandler}>
                            VIEW ON MAP
                        </Button>
                        <Button to={`/places/${id}`}>EDIT</Button>
                        <Button danger onClick={toggleDeleteHandler}>
                            DELETE
                        </Button>
                    </div>
                </Card>
            </li>
        </>
    );
};

export default PlaceItem;
