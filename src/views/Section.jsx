import React, { Component } from "react";
import { Container, Logo } from "../components/Wrapper";

export default class Section extends Component {
	render() {
		return (
			<section>
				<Container>
					<Logo />
				</Container>
			</section>
		)
	}
}
