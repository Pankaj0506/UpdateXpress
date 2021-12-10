import React from "react";
import { Container, Header } from "semantic-ui-react";
import { getArticles } from "./api";
import ArticleList from "./components/articlesList";
import SearchBar from "./components/searchBar";
import { Image } from "semantic-ui-react";

class App extends React.Component {
  state = {
    articles: [],
    searchTopic: "",
    totalResults: "",
    loading: false,
    apiError: "",
  };

  searchForTopic = async (topic) => {
    try {
      this.setState({ loading: true });
      const response = await getArticles(topic);
      this.setState({
        articles: response.articles,
        searchTopic: topic,
        totalResults: response.totalResults,
      });
    } catch (error) {
      this.setState({ apiError: "Could not find any articles" });
    }
    this.setState({ loading: false });
  };

  render() {
    const {
      articles,
      apiError,
      loading,
      searchTopic,
      totalResults,
    } = this.state;
    return (
      <Container style={{background:'#deeaee', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)', borderRadius: 10, paddingBottom: 15, margin: 25, marginBottom: 25}}>
        <Container size='medium' >
          <Image src='UPDATEXPRESS.png' size='medium' centered />
        </Container>
        <Header as="h2" style={{ textAlign: "center", margin: 10 }}>
          Search for a topic
        </Header>
        <SearchBar searchForTopic={this.searchForTopic} />
        {loading && (
          <p style={{ textAlign: "center" }}>Searching for articles...</p>
        )}
        {articles.length > 0 && (
          <Header as="h4" style={{ textAlign: "center", margin: 20 }}>
            Found {totalResults} articles on "{searchTopic}"
          </Header>
        )}
        {articles.length > 0 && <ArticleList articles={articles} />}
        {apiError && <p>Could not fetch any articles. Please try again.</p>}
      </Container>
    );
  }
}

export default App;