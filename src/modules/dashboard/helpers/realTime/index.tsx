/** @name Dependencies */
import React, { useEffect, useRef, useState } from 'react'
/** @name Internal */
import { Container, Content, RealTime, Title, Text } from "./styles";
/** @name External */
import { Row, Col } from 'helpers';
import Colors from 'constants/client/colors';

export const BoxRealTime: Function = React.memo((): JSX.Element => {
    const useRefContainer = useRef<object | any>(null);
    const [widthInfoFloating, setWidthInfoFloating] = useState<number | null>(null);

    useEffect(() => {
        setWidthInfoFloating((useRefContainer.current.offsetWidth))
    },[useRefContainer, widthInfoFloating])

    return (
        <Row>
            <Col cols="12 12 12 6 5 3">
                <Container ref={useRefContainer}>
                    <RealTime width={widthInfoFloating}>
                        <Title>Em <Text bold color={Colors.SECONDARY}>tempo real</Text></Title>
                        <Row className="mt-3">
                            <Col>
                                <Text bold size={25}>19 Pedidos</Text>
                                <Text>&nbsp;de hoje</Text>
                            </Col>
                            <Col>
                                <Text bold size={18}>R$ 1253,74</Text>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col>
                                <Text bold size={25}>Ticket</Text>
                                <Text>&nbsp;por pedido</Text>
                            </Col>
                            <Col>
                                <Text bold size={23}>R$ 65,98</Text>
                            </Col>
                        </Row>
                    </RealTime>
                    <Content width={widthInfoFloating}>
                          lkdsladksa
                    </Content>
                </Container>
            </Col>
        </Row>
    );
});