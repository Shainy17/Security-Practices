import React from 'react';
import { Card } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from "react-bootstrap/Image";

import assets from '../Styles/assets.css';

const Resources = () => {
  return (
    <div>
      <div >
          <img className="resourceimg" src="./Images/resources.png" alt="blogs image" />
      </div>

      {/* Resource 1 - Informational Videos */}
      <h2 className="Resource1">Informational Videos</h2>
      <div className="container">

        <div className="RImage1">
          <img src="./Images/InfoVideo.png" alt="bruce image" width={300} height={160} rounded />
        </div>
        <div className="pRes1">
        <p>
        Informational videos are a multimedia format that delivers educational content, explanations, and insights on best security practices. These videos are typically designed to inform and educate viewers on specific subjects or concepts. 
        </p>
        <a href="https://www.youtube.com/@StaySafeOnline1/playlists" target="_blank">Click to watch the videos</a>
        </div>
      </div>

      {/* Resource 2 - Security tools */}
      <h2 className="Resource1">Security Tools</h2>

       {/* tool1 */}
       <CardGroup>
          <Card className="googleImage">
            <Card.Img variant="top" src="/Images/wireshark-1.png" alt=""/>
            <Card.Body>
              <Card.Title>Wireshark</Card.Title>
              <Card.Text>
              Wireshark is a powerful and widely-used open-source network protocol analyzer. It allows users to capture, inspect, and analyze network traffic in real-time.
              </Card.Text>
              <Card.Link target="_blank" href="https://www.varonis.com/blog/how-to-use-wireshark">Know more</Card.Link>
            </Card.Body>
        </Card>

        {/* tool 2 */}
          <Card className="securityWeek">
            <Card.Img variant="top" src="/Images/nmap.jpg" alt=""/>
            <Card.Body>
              <Card.Title>Nmap- Network Mapper</Card.Title>
              <Card.Text>
              Nmap, short for Network Mapper, is a versatile and open-source security tool used for network discovery and security auditing. 
              </Card.Text>
              <Card.Link target="_blank" href="https://nmap.org/">Know more</Card.Link>
            </Card.Body>
        </Card>

        {/* tool 3 */}
        <Card className="kerbs">
            <Card.Img variant="top" src="/Images/metasploit.png" alt=""/>
            <Card.Body>
              <Card.Title>Metasploit</Card.Title>
              <Card.Text>
              Metasploit is a powerful and widely-used penetration testing and exploitation framework. It provides security professionals, ethical hackers, and cybersecurity experts with a comprehensive toolkit for testing the vulnerabilities.
              </Card.Text>
              <Card.Link target="_blank" href="https://www.metasploit.com/download">Know more</Card.Link>
            </Card.Body>
        </Card>

        {/* tool4 */}
        <Card className="dark">
            <Card.Img variant="top" src="/Images/burpsuite.png" alt=""/>
            <Card.Body>
              <Card.Title>Burpsuite</Card.Title>
              <Card.Text>
              Burp Suite is a leading web vulnerability scanner and penetration testing tool used primarily for assessing and securing web applications. 
              </Card.Text>
              <Card.Link target="_blank" href="https://portswigger.net/burp/documentation/desktop/getting-started">Know more</Card.Link>
            </Card.Body>
        </Card>
        </CardGroup>

     {/* Resource 3 - Security Certifications
     <h2 className="Resource1">Security Certification Programs</h2>
     <div className="container">
          
          <div className="list">
          <ListGroup  as="ol" numbered className="list">
            <ListGroup.Item target="_blank" action variant="secondary" href="https://www.isc2.org/">International Information System Security Certification Consortium (ISC)² </ListGroup.Item>
            <ListGroup.Item target="_blank" action variant="secondary" href="https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/" >Certified Ethical Hacker (CEH)</ListGroup.Item>
            <ListGroup.Item target="_blank" action variant="secondary" href="https://www.isaca.org/">Certified Information Systems Auditor (CISA)</ListGroup.Item>
            <ListGroup.Item target="_blank" action variant="secondary" href="https://www.isc2.org/Certifications/CISSP" >Certified Information Systems Security Professional (CISSP)</ListGroup.Item>
            <ListGroup.Item target="_blank" action variant="secondary" href="https://www.isaca.org/credentialing/cism">Certified Information Security Manager (CISM)</ListGroup.Item>
          </ListGroup>
          </div>
          <div className="img2">
            <Image src="./Images/certification.png" width={400} height={280} />
          </div>
          </div> */}
      
    {/* Resource 4 - Glossary
    <h2 className="Resource1">Glossary</h2>
    <div className="container">
          <div className="img3">
            <Image src="./Images/Glossary.png" width={400} height={280} rounded />
          </div>     */}
          

{/* 
    </div> */}
    </div>
  )

}

export default Resources