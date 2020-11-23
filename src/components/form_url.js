import React, { useState } from 'react';
import FormCards from './form_cards';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function Form_url() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     urls: ['', '', '', '', '', '', '', '', '', ''],
  //   };
  // }
  function addUrls(urlArray) {
    axios({
      method: 'post',
      url: '',
      data: {
        query: '',
      },
    })
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  }
  const [urls, setUrls] = useState(() => {
    return ['', '', '', '', '', '', '', '', '', ''];
  });

  function updateUrl(url, pos) {
    setUrls((prevUrls) => {
      prevUrls[pos] = url;
      return { ...prevUrls, urls: prevUrls };
    });
    // this.setState((state) => {
    //   const urls = state.urls.map((item, j) => {
    //     if (j === pos) {
    //       return (item = url);
    //     } else {
    //       return item;
    //     }
    //   });

    //   return {
    //     urls,
    //   };
    // });
  }

  return (
    <div>
      <FormCards url={updateUrl.bind(this)} pos={0} />
      {urls[0] ? <FormCards url={updateUrl.bind(this)} pos={1} /> : null}
      {urls[1] ? <FormCards url={updateUrl.bind(this)} pos={2} /> : null}
      {urls[2] ? <FormCards url={updateUrl.bind(this)} pos={3} /> : null}
      {urls[3] ? <FormCards url={updateUrl.bind(this)} pos={4} /> : null}
      {urls[4] ? <FormCards url={updateUrl.bind(this)} pos={5} /> : null}
      {urls[5] ? <FormCards url={updateUrl.bind(this)} pos={6} /> : null}
      {urls[6] ? <FormCards url={updateUrl.bind(this)} pos={7} /> : null}
      {urls[7] ? <FormCards url={updateUrl.bind(this)} pos={8} /> : null}
      {urls[8] ? <FormCards url={updateUrl.bind(this)} pos={9} /> : null}
      <Button
        variant="primary"
        type="submit"
        onClick={(e) => {
          console.log(urls);
        }}
      >
        Add
      </Button>
    </div>
  );
}

export default Form_url;
