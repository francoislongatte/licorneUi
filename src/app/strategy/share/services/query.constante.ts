import gql from 'graphql-tag';

export const GET_STRATEGY_PAGE = gql`{
  contentconfigs(where : { page : "strategyPage" }) {
    position
    id_text
    contents {
      Text_en
      Title_en
      Subtitle_en
    }
  }
}`;

export const GET_WHAT_THEY_DO_PAGE = gql`{
  contentconfigs(where : { page : "strategyWhatTheyDoPage" }) {
    position
    id_text
    contents{
      Text_en
      Text_fr
      Title_en
      Title_fr
      Schema_en
      Subtitle_en
      order
      onglet
      image {
        url
      }
    }
  }
}`;

export const GET_WHAT_WE_DO_PAGE = gql`{
  contentconfigs(where : { page : "strategyWhatWeDoPage" }) {
    position
    id_text
    contents{
      Text_en
      Text_fr
      Title_en
      Title_fr
      Schema_en
      Subtitle_en
      order
      onglet
      image {
        url
      }
    }
  }
}`;


export const GET_WHAT_WE_DO_HEART_OF_STRATEGY_PAGE = gql`{
  contentconfigs(where : { page : "strategyHeartOfStrategy" }) {
    position
    id_text
    contents{
      Text_en
      Text_fr
      Title_en
      Title_fr
      Schema_en
      Subtitle_en
      order
      onglet
      image {
        url
      }
    }
  }
}`;
