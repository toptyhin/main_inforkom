import { gql }     from '@apollo/client'
import {useQuery}  from '@apollo/client';

export const Tariff_gql = () => useQuery(gql`
  query { 
    tarifs { 
      data {
        id
        attributes {
          head
          description
          address 
        } 
      } 
    }
  }`
)

export const Main_gql = () => useQuery(gql`
  query { 
    main { 
      data {
        attributes {
          banner {
            header
          } 
          people_area {
            header_people
            people {
              text
              pics {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
          green_area {
            header
            logos {
              data {
                attributes {
                  url
                }
              }
            }
          }
          tariff {
            header
            tariff_little {
              tariff_box {
                data {
                  attributes {
                    url
                  }
                }
              }
              url
              name
            }
            tariff_big {
              name
              url
              text
              tariff_box {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
          order {
            header
            order_form {
              phone
              inn
            }
            order_form_subject {
              text
            }
            order_button {
              name
              href
              theme
              type
              width
              height
              marginTop
            }
          }
          account {
            header
            
            picture {
              data {
                attributes {
                  url
                }
              }
            }
            enter_button {
              name
              href
              theme
              type
              width
              height
              marginTop
            }
          }
          icons {
            data {
              attributes {
                url
              }
            }
          }
          calc {
            header
            subtitle
            subtitle_mob
            button_doc {
              data {
                attributes {
                  url
                }
              }
            }
          }
          techcenter {
            header
            text
            tech_item {
              text
              url
              img {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
          card {
            header
            url_appstore
            url_google
            img {
              data {
                attributes {
                  url
                }
              }
            }
            order_button {
              name
              href
              theme
              type
              width
              height
              marginTop
            }
          }
          azs {
            header
            text
            colored_header
            img {
              data {
                attributes {
                  url
                }
              }
            }
            logos {
              data {
                attributes {
                  url
                }
              }
            }
            azs_button {
              name
              href
              theme
              type
              width
              height
              marginTop
            }
          }
        }
      }
    } 
  }`)

export const Posts_gql = () => useQuery(gql`
query { 
  posts {
    data {
      id
      attributes {
        Title
        SubTitle
        Content
        seourl
        publishedAt
        MainImage {
          data {
            attributes {
              url
            }
          }
        }
        Gallery {
          data {
            attributes {
              url
            }
          }
        }  
        dateCreated
      }
    }
  }
}`);

export const Post_gql = (url) => useQuery(gql`
  query { 
    posts (filters: {seourl:{eq:"${url}"}}){    
      data {
        id
        attributes {
          Title
          SubTitle
          Content
          seourl
          publishedAt
          MainImage {
            data {
              attributes {
                url
              }
            }
          }
          Gallery {
            data {
              attributes {
                url
              }
            }
          }  
          dateCreated
        }
      }
    }
  }`);

  export const FuelCard_gql = () => useQuery(gql`
  query { 
    fuelCard {
      data {
        attributes {
          main
          text_1
          header_1
          list_1 {
            item
            
          }
          header_2
          list_2 {
            item
            
          }
          text_2
          header_3
          list_3 {
            item
            
          }
        }
      }
    }
  }`)