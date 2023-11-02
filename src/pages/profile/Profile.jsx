import {React} from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator, Button  } from '@chakra-ui/react';
import threePoints from '../../assets/trespuntos.svg';
import back from '../../assets/back.svg';
import './Profile.scss';
import { Link } from 'react-router-dom'

const Profile = () => {
  const options = ['Fotos','Videos','Album','Tag'];
  const buttons = ['Seguir','Mensajes'];
  return (
    <main>
      <section className='profile__cover'>
        <figure className='profile__cover--back'>
          <img src={back} alt="salir" />
        </figure>
        <figure className='profile__cover--photo'>
          <img src="https://s3-alpha-sig.figma.com/img/9b3b/6ddb/0ccefa9a4a76163a79e386eba01d08ba?Expires=1699228800&Signature=YeJrpuTJqClDYvGXymRoCAkdmsppve3M3wlHw~1gdE~OA5EbTyXQrpn7pCSc~yTgjFiHKrkAtneh3BAlDE6wuV63oyQxqV1xqwKmn8DAxAo5DvqS3u1nlDFqeEDbdHLm-28UeeoY5u7CtCTV0RlMtQKZbGdMG19unn7ISHvZ3rhoLXNQ8FD9us57inTe3QZN68y0U8AW8bbhXsrXLhXuuSOs1re0ud2Q0Hw085XqnGcerHSnYQZ99VyY89sjR-II5-mzamzye5SLkmpDZP7uZxPZGUd5rXgXXEPkkSzZhja6ath8OoiQ07S9jPaQTKx7bI0xlDB8U3tksw8jH9zVJA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="portada" />
        </figure>
        <figure className='profile__cover--threePoints'>
          <img src={threePoints} alt="detalle perfil" />
        </figure>
      </section>
      <section className='profile__background'>
        <article className='profile__info'>
          <p className='profile__info--text'>
            <span>
              10.7 M
            </span>
            Seguidores
          </p>
          <Link className='profile__info--photo'>
              <img src="https://s3-alpha-sig.figma.com/img/79ca/5d93/806da2cb38b43ace6f2e15bc6c2f6da5?Expires=1699228800&Signature=ic6r60HkjwYbjbD6q7rvDsRXg1IH70aNvVg7FMCMOc3fF-nUdB56clrt8uUQlPi-mm8psCkW5TqmBT7NwqggtrSexeop2kCH6T0iQmrm37Z8dCO-TXD-RZbNUKKo7ZjmGj1V1OHcpYN1i8JfMeStZtk~xy-5SY6qUlfuAR7ftxo8qph8eqA9KvjGkQEhLe7ekI~Z2kvzDf0lViwPt1oMLT2uwzt2GsyO4x9CBnfGTX4EQxg3ZOK1Vlh1viKui2S0hZm-gKnkPjaKjRXWVyijkf61R34Ywc3rpoYPAxvDQsZX6gpOzPbQaBaBfj3Y57Mjsu~su13aWrWHinf5SCN7aw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Foto de Perfil" />
          </Link>
          <p className='profile__info--text'>
            <span>
              108.3 M
            </span>
            Likes
          </p>
        </article>
        <article className='profile__description'>
          <span>Jennie Kim</span>
          <p>J. Hello Guys<br/>Follow me and like my post</p>
        </article>
        <article className='profile__actions'>
          {
            buttons.map((nombre, index)=>(
              <Button className='profile__actions--button' key={index}>{nombre}</Button>
            ))
          }
        </article>
        <article className='profile__album'>
          <Tabs position="relative"  isFitted variant="enclosed">
            <TabList>
              {
                options.map((nombre,index)=>(
                  <Tab _hover={{color: "rgba(47, 47, 47, 1)"}} _selected={{color: "rgba(47, 47, 47, 1)"}} fontWeight={400} key={index}>{nombre}</Tab>
                ))
              }
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="#FF7674"
              borderRadius="1px"
            />
            <TabPanels>
              <TabPanel className='profile__album--section'>
                <figure className='profile__album--photo'>
                  <img src="https://s3-alpha-sig.figma.com/img/47a3/b386/305d6fd1514463f1edc8412d7ae7b45c?Expires=1699228800&Signature=Iu36GsytRUn9o14sarWkPXbGkXNUict6iLSNz9oOi3m87oONkH8Ce7l6UJPKskUWxnhqduVX65bood-PicB7W8Zgky6nM4dZ-0Qa7BRGf20ZlpEm7kMEi8gjnZn59XMu9uYmokQ0kiHfmsg9UIoZfTmAMV5OsKJh~dygQAgOval5Z64ph4HwokbPbANLYYaxPWcHEXp09Cm3S8-XEywlXl3zdxjVGMzWgVjaMqQJCZnme-QfRT553~x6cXBQaz7TbI01zk6-q~IC3nwyUUvcPmeajrWsu~KGi0lnwu4J-0S~refOQ6nQRdDgTatXzY2yg7a5k0t8~5V3Z7G8n2CYjg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </figure>
                <figure className='profile__album--photo'>
                  <img src="https://s3-alpha-sig.figma.com/img/47a3/b386/305d6fd1514463f1edc8412d7ae7b45c?Expires=1699228800&Signature=Iu36GsytRUn9o14sarWkPXbGkXNUict6iLSNz9oOi3m87oONkH8Ce7l6UJPKskUWxnhqduVX65bood-PicB7W8Zgky6nM4dZ-0Qa7BRGf20ZlpEm7kMEi8gjnZn59XMu9uYmokQ0kiHfmsg9UIoZfTmAMV5OsKJh~dygQAgOval5Z64ph4HwokbPbANLYYaxPWcHEXp09Cm3S8-XEywlXl3zdxjVGMzWgVjaMqQJCZnme-QfRT553~x6cXBQaz7TbI01zk6-q~IC3nwyUUvcPmeajrWsu~KGi0lnwu4J-0S~refOQ6nQRdDgTatXzY2yg7a5k0t8~5V3Z7G8n2CYjg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </figure>
                <figure className='profile__album--photo'>
                  <img src="https://s3-alpha-sig.figma.com/img/47a3/b386/305d6fd1514463f1edc8412d7ae7b45c?Expires=1699228800&Signature=Iu36GsytRUn9o14sarWkPXbGkXNUict6iLSNz9oOi3m87oONkH8Ce7l6UJPKskUWxnhqduVX65bood-PicB7W8Zgky6nM4dZ-0Qa7BRGf20ZlpEm7kMEi8gjnZn59XMu9uYmokQ0kiHfmsg9UIoZfTmAMV5OsKJh~dygQAgOval5Z64ph4HwokbPbANLYYaxPWcHEXp09Cm3S8-XEywlXl3zdxjVGMzWgVjaMqQJCZnme-QfRT553~x6cXBQaz7TbI01zk6-q~IC3nwyUUvcPmeajrWsu~KGi0lnwu4J-0S~refOQ6nQRdDgTatXzY2yg7a5k0t8~5V3Z7G8n2CYjg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </figure>
                <figure className='profile__album--photo'>
                  <img src="https://s3-alpha-sig.figma.com/img/47a3/b386/305d6fd1514463f1edc8412d7ae7b45c?Expires=1699228800&Signature=Iu36GsytRUn9o14sarWkPXbGkXNUict6iLSNz9oOi3m87oONkH8Ce7l6UJPKskUWxnhqduVX65bood-PicB7W8Zgky6nM4dZ-0Qa7BRGf20ZlpEm7kMEi8gjnZn59XMu9uYmokQ0kiHfmsg9UIoZfTmAMV5OsKJh~dygQAgOval5Z64ph4HwokbPbANLYYaxPWcHEXp09Cm3S8-XEywlXl3zdxjVGMzWgVjaMqQJCZnme-QfRT553~x6cXBQaz7TbI01zk6-q~IC3nwyUUvcPmeajrWsu~KGi0lnwu4J-0S~refOQ6nQRdDgTatXzY2yg7a5k0t8~5V3Z7G8n2CYjg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </figure>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
              <TabPanel>
                <p>four!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </article>
      </section>
    </main>
  )
}

export default Profile