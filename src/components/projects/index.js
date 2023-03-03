import React, { useState, useEffect } from "react";
import '../projects/style.css';
import {
  Col,
  Row,
  Card,
} from 'react-bootstrap';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {ToastsContainer, ToastsStore} from 'react-toasts';

const PCD = () => {
  const [git, setGit] = useState([]);

  async function fetchData() {
    const res = await fetch("https://api.github.com/users/vink08/repos?fork=false");
    res
      .json()
      .then((res) => {
        // Filter out forked repos
        const nonForkedRepos = res.filter((item) => !item.fork);
        setGit(nonForkedRepos);
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <Row>
      {git.map(item => (
        <Col xl={6} key={item.id}>
         
            
         
          <Card className="pro_card">
            <Row>
            
              <Col xl={12}>
                <Card.Title className="repoName">
                  Repo: {item.name}
                </Card.Title>
                <Card.Subtitle className="repoInfo">
                  Created: {item.created_at} <br />
                  Updated: {item.updated_at}<br />
                </Card.Subtitle>
              
                <Card.Body className="project_card_main">&nbsp;
                  
                  <a href={item.svn_url} style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-github fa-3x"></i>
                  </a>
                  <ToastsContainer store={ToastsStore} timer='10000' />
                  

                </Card.Body>
                <br/>


              </Col>
              
            </Row>
          </Card>
          
        </Col>
      ))}
    </Row>
  );
};

export default PCD;
