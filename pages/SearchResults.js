import verifyLinksContain from "../support/assertions/verifyLinksContain";

class SearchResults{
    get searchResultsLinks(){
        return $$(".LC20lb");
    }

    verifyResults(keyword){
        verifyLinksContain(this.searchResultsLinks, keyword);
    }
}

module.exports = new SearchResults();