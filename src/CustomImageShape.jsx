import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
const CustomImageShape = () => {
    return(
        <>
        <Container>
            <Row>
                <Col xs = {6} md = {4}>
                    <Image src='../public/logo512.png' rounded></Image>
                </Col>
                <Col>
                    <Image src='C://Users/ASUS/OneDrive/Pictures/Karna.jpeg' roundedCircle></Image>
                </Col>
                <Col>
                    <Image src='C:\Users\ASUS\OneDrive\Pictures\Karna.jpe' thumbnail></Image>
                </Col>
            </Row>
        </Container>
        </>
    );
};
export default CustomImageShape;
