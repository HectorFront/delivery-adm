/** @name Dependencies */
import React from 'react';
/** @name Internal */
import * as S from "./styles";
/** @name External */
import { String } from "utils";
import { Row, Col } from 'helpers';
import Colors from 'constants/client/colors';

/** @name Constants */
export const CURRENT_MONTH: string = 'Novembro';

export const BoxRealtime: React.ElementType = React.memo((): JSX.Element =>
    <Row>
        <Col cols="12 12 6 6 5">
            <S.Container>
                <Col cols="12 12 12 7 6">
                    <S.RealTime>
                        <S.Title>Em <S.Text bold color={Colors.SECONDARY}>tempo real</S.Text></S.Title>
                        <Row className="mt-3">
                            <Col>
                                <S.Text bold size={25}>19 Pedidos</S.Text>
                                <S.Text>&nbsp;de hoje</S.Text>
                            </Col>
                            <Col>
                                <S.Text bold size={18}>{String.formatCurrency(1253.74)}</S.Text>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col>
                                <S.Text bold size={25}>Ticket</S.Text>
                                <S.Text>&nbsp;por pedido</S.Text>
                            </Col>
                            <Col>
                                <S.Text bold size={23}>{String.formatCurrency(65.98)}</S.Text>
                            </Col>
                        </Row>
                    </S.RealTime>
                </Col>
                <Col cols="12 12 12 5 6">
                    <S.Content>
                        <Row className="mb-4">
                            <Col>
                                <S.Text bold color={Colors.SECONDARY} size={18}>Pedidos</S.Text>
                                <S.Text bold size={18}>&nbsp;/ {CURRENT_MONTH}</S.Text>
                            </Col>
                            <Col>
                                <S.Text>{0} pedidos</S.Text>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col>
                                <S.Text bold color={Colors.SECONDARY} size={18}>Ticket</S.Text>
                                <S.Text bold size={18}>&nbsp;/ {CURRENT_MONTH}</S.Text>
                            </Col>
                            <Col>
                                <S.Text>{String.formatCurrency(0.00)}</S.Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <S.Text bold size={22}>Avaliação no App</S.Text>
                            </Col>
                            <Col>
                                <S.Text bold color={Colors.SECONDARY} size={30}>4,5</S.Text>
                            </Col>
                        </Row>
                    </S.Content>
                </Col>
            </S.Container>
        </Col>
    </Row>
);