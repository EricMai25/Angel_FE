import { Card, Button } from 'react-bootstrap';
const InfoCards = ({ pageInfo }) => {
  return (
    <div>
      {pageInfo.map((data) => {
        return (
          <Card>
            <Card.Header>
              <Card.Title>{data.companyName}</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                {data.positionType} {data.positionTitle}
              </Card.Title>
              <Card.Link>{data.websiteUrl}</Card.Link>
              <Card.Text>{data.positionLocation}</Card.Text>
              <Card.Text>
                {data.recruiterName} <br /> {data.recruiterEmail}
              </Card.Text>
              <Card.Text>{data.companyDescription}</Card.Text>
              {data.didApply ? (
                <div>
                  <Button variant="primary">Applied</Button>
                  {/* <Card.Text> */}
                  <small> {data.appliedAt} </small>
                  {/* </Card.Text>   */}
                </div>
              ) : (
                <div>
                  <Button variant="primary">Apply</Button>
                </div>
              )}
              <footer className="blockquote-footer" style={{ float: 'right' }}>
                {' '}
                Last updated: {data.updatedAt}
              </footer>{' '}
              <br />
              <footer className="blockquote-footer" style={{ float: 'right' }}>
                {' '}
                Created At: {data.updatedAt}
              </footer>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default InfoCards;

// companyName, companyDescription, websiteUrl, positionLocation, positionType, positionTitle, sponsorsVisa, recruiterName, recruiterEmail, didApply, markets, createdAt, updatedAt, appliedAt
