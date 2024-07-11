import React from 'react';
// ADD IMPORTS BACK FOR GRAPHS SECTION
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button, Collapse } from 'antd';
import { useHistory } from 'react-router-dom';
// for the purposes of testing PageNav
// import PageNav from '../../common/PageNav';

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>

      {/* Graphs Section: Add code here for the graphs section for your first ticket */}
      <div className="graphs-section">
        <div
          className="graph-images"
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            gap: '5px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            <img
              src={GrantRatesByOfficeImg}
              style={{ width: '400px', height: '300px', marginBottom: '10px' }}
            ></img>
            <h3>Search Grant Rates By Office</h3>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            <img
              src={GrantRatesByNationalityImg}
              style={{ width: '325px', height: '300px', marginBottom: '10px' }}
            ></img>
            <h3>Search Grant Rates By Nationality</h3>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            <img
              src={GrantRatesOverTimeImg}
              style={{ width: '400px', height: '300px', marginBottom: '10px' }}
            ></img>
            <h3>Search Grant Rates Over Time</h3>
          </div>
        </div>
        <div
          className="view-more-data-btn-container"
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '15px',
          }}
        >
          <Button
            type="default"
            style={{
              backgroundColor: '#404C4A',
              color: '#FFFFFF',
              marginRight: '20px',
            }}
            onClick={() => history.push('/graphs')}
          >
            View the Data
          </Button>
          <Button
            type="default"
            style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
            onClick={() => history.push('/graphs')}
          >
            Download the data
          </Button>
        </div>
      </div>
      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </div>
      <div>
        {/* Bottom Section: Add code here for the graphs section for your first ticket */}
        <div className="bottom-section" style={{ textAlign: 'center' }}>
          <h1
            style={{ fontSize: '50px', textAlign: 'center', marginTop: '30px' }}
          >
            Systemic Disparity Insight
          </h1>
          <div
            className="bottom-paragraphs"
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              gap: '5px',
              fontSize: '30px',
              marginTop: '30px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                width: '30%',
              }}
            >
              <h2>36%</h2>
              <h3 style={{ fontSize: '20px', textAlign: 'center' }}>
                By the end of the Trump administration, the average asylum
                office grant rate had fallen 36 percent from an average of 44
                percent in fiscal year 2016 to 28 percent in fiscal year 2020.
              </h3>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                width: '30%',
              }}
            >
              <h2>5%</h2>
              <h3 style={{ fontSize: '20px', textAlign: 'center' }}>
                The New York asylum office grant rate dropped to 5 percent in
                fiscal year 2020.
              </h3>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                width: '30%',
              }}
            >
              <h2>6x Lower</h2>
              <h3 style={{ fontSize: '20px', textAlign: 'center' }}>
                Between fiscal year 2017 and 2020, the New York asylum office’s
                average grant rate was six times lower than the San Francisco
                asylum office.
              </h3>
            </div>
          </div>
          <Button
            type="default"
            style={{
              backgroundColor: '#404C4A',
              color: '#FFFFFF',
              marginRight: '20px',
              marginTop: '40px',
            }}
            onClick={() => history.push('/graphs')}
          >
            Read More
          </Button>
          <p onClick={() => scrollToTop()} className="back-to-top">
            Back To Top ^
          </p>
        </div>
      </div>
    </div>
  );
}
export default RenderLandingPage;
