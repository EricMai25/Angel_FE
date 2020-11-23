import React, { useState, useEffect } from 'react';
import InfoCards from './info_cards';
import axios from 'axios';

function InfoPage() {
  useEffect(() => {
    getJobData();
  });

  function getJobData() {
    axios({
      method: 'post',
      url: '',
      data: {
        query: ``,
      },
    })
      .then((data) => {
        setJobData((prevJobData) => (prevJobData = data));
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const [jobData, setJobData] = useState(() => {
    return [
      {
        companyName: 'Twitch',
        companyDescription:
          'fkdl;a;kdflakjsmngieslmcnvzsikdhfl  klasdflakh ldfja kldfkadfehldknf ahei fadskvh e;a;h jdfh eakldmvhcuvema ich ehumd uedakfj ea;kdhf ;aeh',
        websiteUrl: 'www.Abasdasdac.com',
        positionLocation: 'San francisco',
        positionType: 'Junior',
        positionTitle: 'Software Developer',
        sponsorsVisa: 'No',
        recruiterName: 'John Thompson',
        recruiterEmail: 'JT@gmail.com',
        didApply: true,
        markets: 'Wat',
        createdAt: Date(6786786),
        updatedAt: Date(6786786211),
        appliedAt: Date(678678612351),
      },
      {
        companyName: 'YouTube',
        companyDescription:
          'fkdl;a;kdflakjsmngieslmcnvzsikdhfl  klasdflakh ldfja kldfkadfehldknf ahei fadskvh e;a;h jdfh eakldmvhcuvema ich ehumd uedakfj ea;kdhf ;aeh',
        websiteUrl: 'www.asdasfas.com',
        positionLocation: 'San francisco',
        positionType: 'Junior',
        positionTitle: 'AI Developer',
        sponsorsVisa: 'No',
        recruiterName: 'Sara Jones',
        recruiterEmail: 'SJ@gmail.com',
        didApply: false,
        markets: 'Wat',
        createdAt: Date(6786786),
        updatedAt: Date(6786786211),
        appliedAt: Date(678678612351),
      },
    ];
  });

  return (
    <div>
      <InfoCards pageInfo={jobData} />
    </div>
  );
}

export default InfoPage;
