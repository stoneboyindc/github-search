import React, { Component } from 'react';
import Search from './search';
import { fetchRepos, getRepoCount, REPOS_PAGE_SIZE } from '../util/githubUtil';
import Result from './result';

class Container extends Component {
    constructor(props) {
        super(props);
        this.handleOrgNameChange = this.handleOrgNameChange.bind(this);
        this.handleMinStarsChange = this.handleMinStarsChange.bind(this);
        this.handleMinWatchersChange = this.handleMinWatchersChange.bind(this);
        this.handleMaxIssuesChange = this.handleMaxIssuesChange.bind(this);

        this.state = {
            orgName: '',
            minStars: 0,
            minWatchers: 0,
            maxIssues: 0,
            result: []
        };
    }

    handleOrgNameChange(orgName) {
        this.setState({ orgName: orgName });

        let repoSize = 0;
        getRepoCount(orgName).then((size) => {
            repoSize = size;
            // console.log("Repo Size: " + repoSize);
        });

        fetchRepos(orgName).then((obj) => {
            this.setState({ result: obj });
        });

    }

    handleMinStarsChange(minStars) {
        this.setState({ minStars: minStars });
        let result = this.state.result;
        let filterResult = result.filter(item => item.stars >= minStars);
        this.setState({ result: filterResult });
    }

    handleMinWatchersChange(minWatchers) {
        this.setState({ minWatchers: minWatchers });
        let result = this.state.result;
        let filterResult = result.filter(item => item.watchers >= minWatchers);
        this.setState({ result: filterResult });
    }

    handleMaxIssuesChange(maxIssues) {
        this.setState({ maxIssues: maxIssues });
        let result = this.state.result;
        let filterResult = result.filter(item => item.issues <= maxIssues);
        this.setState({ result: filterResult });
    }

    render() {
        let orgName = this.state.orgName;
        let minStars = this.state.minStars;
        let minWatchers = this.state.minWatchers;
        let maxIssues = this.state.maxIssues;
        let result = this.state.result;

        return (
            <div className="App">
                <Search label="Org Name" value={orgName}
                    onChange={this.handleOrgNameChange} />
                <Search label="Min Stars" value={minStars}
                    onChange={this.handleMinStarsChange} />
                <Search label="Min Watchers" value={minWatchers}
                    onChange={this.handleMinWatchersChange} />
                <Search label="Max Issues" value={maxIssues}
                    onChange={this.handleMaxIssuesChange} />
                <Result items={result} />
            </div>
        );
    }
}

export default Container