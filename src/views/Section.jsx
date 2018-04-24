import React, { Component } from "react";
import { Container, SlopeRight, SlopeLeft, Row } from "../components/Wrapper";
import { Banner, BannerText } from "../components/Images";

export default class Section extends Component {
	render() {
		return (
			<section className="sloped">
				<SlopeLeft>
					<Banner />
				</SlopeLeft>

				<SlopeLeft>
					<Container>
						<Row>
							<BannerText />
						</Row>
					</Container>
				</SlopeLeft>

				<SlopeLeft>
					<Row>
					</Row>
				</SlopeLeft>

				<div className="just-regular-no-slope-wrapper">
					<Row/>
				</div>

				<SlopeRight>
					<Container>
						<Row>
						</Row>
					</Container>
				</SlopeRight>
				<div className="just-regular-no-slope-wrapper padding-top-bottom">
				</div>
			</section>
		)
	}
}
