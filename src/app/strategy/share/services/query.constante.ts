import gql from 'graphql-tag';

export const GET_STRATEGY_PAGE_EN = gql`{
  strategies(where: { page : "strategyPage" }) {
    	Text_en
      Title_en
      Schema_en
      Subtitle_en
      List_en
    	id_position
    	onglet
    	order
  }
}`;

export const GET_STRATEGY_PAGE_FR = gql`{
  strategies(where: { page : "strategyPage" }) {
    	Text_fr
      Title_fr
      Schema_fr
      Subtitle_fr
      List_fr
    	id_position
    	onglet
    	order
  }
}`;

export const GET_WHAT_THEY_DO_PAGE_FR = gql`{
  strategies(where: { page : "strategyWhatTheyDoPage" }) {
    	Text_fr
      Title_fr
      Schema_fr
      Subtitle_fr
      List_fr
    	id_position
    	onglet
    	order
    	image {
        url
      }
  }
}`;

export const GET_WHAT_THEY_DO_PAGE_EN = gql`{
  strategies(where: { page : "strategyWhatTheyDoPage" }) {
    	Text_en
      Title_en
      Schema_en
      Subtitle_en
      List_en
    	id_position
    	onglet
    	order
    	image {
        url
      }
  }
}`;

export const GET_WHAT_WE_DO_PAGE_FR = gql`{
  strategies(where: { page : "strategyWhatWeDoPage" }) {
    	Text_fr
      Title_fr
      Schema_fr
      Subtitle_fr
      List_fr
    	id_position
    	onglet
    	order
    	image {
        url
      }
  }
}`;

export const GET_WHAT_WE_DO_PAGE_EN = gql`{
  strategies(where: { page : "strategyWhatWeDoPage" }) {
    	Text_en
      Title_en
      Schema_en
      Subtitle_en
      List_en
    	id_position
    	onglet
    	order
    	image {
        url
      }
  }
}`;

export const GET_WHAT_WE_DO_HEART_OF_STRATEGY_PAGE_EN = gql`{
  strategies(where: { page : "strategyHeartOfStrategy" }) {
    	Text_en
      Title_en
      Schema_en
      Subtitle_en
      List_en
    	id_position
    	onglet
    	order
    	image {
        url
      }
  }
}`;

export const GET_WHAT_WE_DO_HEART_OF_STRATEGY_PAGE_FR = gql`{
  strategies(where: { page : "strategyHeartOfStrategy" }) {
    	Text_fr
      Title_fr
      Schema_fr
      Subtitle_fr
      List_fr
    	id_position
    	onglet
    	order
    	image {
        url
      }
  }
}`;

export const GET_DIVERSIFICATION_STRATEGY_PAGE_FR = gql`{
  strategies(where: { page : "strategyDiversification" }) {
    	Text_fr
      Title_fr
      Schema_fr
      Subtitle_fr
      List_fr
    	id_position
    	onglet
    	order
    	image {
        url
      }
  }
}`;

export const GET_DIVERSIFICATION_STRATEGY_PAGE_EN = gql`{
  strategies(where: { page : "strategyDiversification" }) {
    	Text_en
      Title_en
      Schema_en
      Subtitle_en
      List_en
    	id_position
    	onglet
    	order
    	image {
        url
      }
  }
}`;
