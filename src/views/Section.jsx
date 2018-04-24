import React, { Component } from "react";
import { Container, SlopeRight, SlopeLeft, Slope, Row } from "../components/Wrapper";
import { Logo, Banner, Banner_text } from "../components/Images";

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
							<Banner_text />
						</Row>
					</Container>
				</SlopeLeft>

				<SlopeRight>
					
				</SlopeRight>
			</section>
		)
	}
}
