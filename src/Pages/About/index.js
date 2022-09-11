import Particles from '../../etc/particles.js';
import myData from '../../data/data.json';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { ImDownload } from 'react-icons/im';
import { motion } from 'framer-motion';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineOppositeContent } from '@mui/lab';
import { Typography } from '@mui/material';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import WorkTwoToneIcon from '@mui/icons-material/WorkTwoTone';
import { color } from '@mui/system';

const About = () => {
  const { experience, skills, links, profile, cv } = myData;

  const Components = {
    SchoolTwoToneIcon: <SchoolTwoToneIcon />,
    WorkTwoToneIcon: <WorkTwoToneIcon />,
  };

  return (
    <>
      <div className='mx-[15vw] h-[150vh] md:h-[120vh] xl:mx-[10vw] md:text-center'>
        <div className='container'>
          <h1 className='text-3xl sm:text-[20px] text-primary font-bold'>
            {profile.name}
          </h1>
          <h4>
            <span>{profile.degree.short}</span> at {profile.school.name}
          </h4>
          <h4>From {profile.location}</h4>
          <h4></h4>
        </div>
        <div className='w-1/2 mx-0 flex sm:items-center sm:container'>
          <ul className='flex items-center text-3xl pt-5 text-sub'>
            <li>
              <a
                href={links.linkedin}
                target='_blank'
                rel='noreferrer'
                title='Linkedin'>
                <BsLinkedin />
              </a>
            </li>
            <li className='ml-5'>
              <a
                href={links.github}
                target='_blank'
                rel='noreferrer'
                title='Github'>
                <BsGithub />
              </a>
            </li>
            <li className='ml-5'>
              <a
                href={'mailto:' + links.email}
                target='_blank'
                rel='noreferrer'
                title='Email'>
                <GrMail />
              </a>
            </li>
            <li className='ml-5 flex justify-center items-center'>
              <span className='text-lg mr-5 text-comment'>Download my CV</span>
              <a
                href={cv.file}
                download
                title='Download CV'
                target='_blank'
                rel='noreferrer'>
                <ImDownload />
              </a>
            </li>
          </ul>
        </div>
        <div className='w-[80%] pt-5 mx-0'>
          {profile.description.map((data, idx) => (
            <h4 key={idx} className='text-comment'>
              {'#'} {data}
            </h4>
          ))}
        </div>
        <div className='w-[80%] mx-0 pt-5'>
          <h1 className='text-xl mb-5'>Technology Stack</h1>
          <div className='grid grid-cols-6 text-left h-full gap-4'>
            {skills.stack.map((data, idx) => (
              <div
                key={idx}
                className='w-1/2 justify-center align-center flex h-auto bg-white rounded-xl px-2 py-2 shadow-sm shadow-primary'>
                <img src={data.img} alt={data.name} title={data.name} />
              </div>
            ))}
          </div>
        </div>
        <div className='w-[80%] mx-0 pt-5'>
          <h1 className='text-xl mb-5'>Relevant Experience</h1>
          <Timeline sx={{ margin: 0, textAlign: 'left' }}>
            {experience.map((data, idx) => (
              <TimelineItem key={idx} sx={{ margin: 0, textAlign: 'left' }}>
                <TimelineOppositeContent
                  sx={{ paddingTop: '20px' }}
                  align='left'
                  variant='body2'
                  className='text-comment'>
                  {data.date}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      backgroundColor: 'white',
                      border: 'solid 1px black',
                      color: 'black',
                    }}>
                    <a href={data?.link} target='_blank' rel='noreferrer'>
                      {Components[data.component]}
                    </a>
                  </TimelineDot>
                  <TimelineConnector sx={{ height: '100px' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2, width: '100vw' }}>
                  <Typography
                    component='a'
                    href={data?.link}
                    target='_blank'
                    rel='noreferrer'
                    className='text-primary'>
                    {data.company}
                  </Typography>
                  <Typography className='text-sub'>{data.position}</Typography>
                  <Typography>{data.work}</Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
        <Particles />
        <motion.div
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 1,
            ease: 'linear',
          }}
          className='container z-[-1] right-[-35vw] fixed block top-[calc(100vh-85%)] '>
          <img
            src='/profile.jpg'
            alt='my profile'
            className='rounded-full h-[80vh] w-auto opacity-50'
          />
        </motion.div>
      </div>
    </>
  );
};

export default About;
