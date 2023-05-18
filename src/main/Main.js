import { Component } from "react";
import { ContentDisplay } from "../components/others/";
import { Error404Page } from "../components/pages";

export default class Main extends Component {
	render() {
		return (
			<ContentDisplay
				backButtonRoute={"https://bryanluwz.github.io/#/"}
				displayName={Main.displayName}
				displayClearHistory={false}
				faIcon={"fa-trash"}
				contentBodyAdditionalClasses={["cat-gpt-content-wrapper"]}
				router={this.props.router}
				handleHeaderTitleClick={() => { console.log("please do not the cat"); }}
			>
				<Error404Page customWarning={"well... this is awkward..."} />
			</ContentDisplay>
		);
	}
}

Main.displayName = "Display Name";
