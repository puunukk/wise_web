import React, { Component } from "react";
import logo from "../components/assets/wisemedia_logo.svg";
import banner from "../components/assets/wisemedia_banner.jpg";
import banner_text from "../components/assets/wisemedia_banner_text_image.png";

var i = "img-responsive center-block";

export class Logo extends Component {
	render() {
		return (
			<a className="wm-brand" herf="/">
				<img src={logo} alt="Wisemedia white" />
			</a>
		);
	}
}

export class Banner extends Component {
	render() {
		return (
			<img className={i} src={banner} alt="Jumbotron" />
		);
	}
}

export class BannerText extends Component {
	render() {
		return (
			<img className={i} src={banner_text} alt="Slogan imagine" />
		);
	}
}