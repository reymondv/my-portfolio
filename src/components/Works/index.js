import { useState } from 'react';
import Particles from '../../etc/particles.js';
import Card from '../Cards/index.js';
import Modal from '../Modal/index.js';
import { useIsMedium } from '../../etc/MediaQuery';

const Works = ({ json }) => {
  const [isShow, setShow] = useState(false);
  const [modalDescription, setModalDescription] = useState();
  const [modalImage, setModalImage] = useState();
  const [modalTitle, setModalTitle] = useState();
  const [modalProjectLink, setModalProjectLink] = useState();

  const closeModal = () => setShow(false);
  const isMedium = useIsMedium();

  const triggerModal = (title, desc, img, link) => {
    setShow(true);
    setModalTitle(title);
    setModalDescription(desc);
    setModalImage(img);
    setModalProjectLink(link);
  };

  return (
    <>
      <div className='container text-center font-mono'>
        <h1 className='font-semibold text-6xl sm:text-3xl font-mono'>
          My.projects()
        </h1>
      </div>
      <div className='py-16 mx-[15vw] h-full md:text-center grid grid-cols-3 gap-5 md:grid-cols-1 xl:grid-cols-2'>
        {json.map((data, idx) => (
          <Card
            key={idx}
            title={data.title}
            image={data.file}
            stack={data.stack}
            link={data.link}
            clicked={() => triggerModal(data.desc, data.title)}>
            {data.description}
          </Card>
        ))}
        <Particles />
      </div>
      {!isMedium && (
        <Modal
          show={isShow}
          close={closeModal}
          title={modalTitle}
          description={modalDescription}
        />
      )}
    </>
  );
};

export default Works;
