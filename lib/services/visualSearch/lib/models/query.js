/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Defines a search query.
 *
 */
class Query {
  /**
   * Create a Query.
   * @member {string} text The query string. Use this string as the query term
   * in a new search request.
   * @member {string} [displayText] The display version of the query term.
   * @member {string} [webSearchUrl] The URL that takes the user to the Bing
   * search results page for the query.
   * @member {string} [searchLink] The URL that you use to get the results of
   * the related search. Before using the URL, you must append query parameters
   * as appropriate and include the Ocp-Apim-Subscription-Key header. Use this
   * URL if you're displaying the results in your own user interface.
   * Otherwise, use the webSearchUrl URL.
   * @member {object} [thumbnail] The URL to a thumbnail of a related image.
   * @member {object} [thumbnail.thumbnail] The URL to a thumbnail of the
   * image.
   * @member {string} [thumbnail.imageInsightsToken] The token that you use in
   * a subsequent call to Visual Search API to get additional information about
   * the image. For information about using this token, see the
   * imageInsightsToken field inside the knowledgeRequest request parameter.
   * @member {object} [thumbnail.insightsMetadata] A count of the number of
   * websites where you can shop or perform other actions related to the image.
   * For example, if the image is of an apple pie, this object includes a count
   * of the number of websites where you can buy an apple pie. To indicate the
   * number of offers in your UX, include badging such as a shopping cart icon
   * that contains the count. When the user clicks on the icon, use
   * imageInisghtsToken in a subsequent Visual Search API call to get the list
   * of shopping websites.
   * @member {number} [thumbnail.insightsMetadata.shoppingSourcesCount] The
   * number of websites that sell the products seen in the image.
   * @member {number} [thumbnail.insightsMetadata.recipeSourcesCount] The
   * number of websites that offer recipes of the food seen in the image.
   * @member {object} [thumbnail.insightsMetadata.aggregateOffer] A summary of
   * the online offers of products found in the image. For example, if the
   * image is of a dress, the offer might identify the lowest price and the
   * number of offers found. Only visually similar products insights include
   * this field. The offer includes the following fields: Name,
   * AggregateRating, OfferCount, and LowPrice.
   * @member {array} [thumbnail.insightsMetadata.aggregateOffer.offers] A list
   * of offers from merchants that have offerings related to the image.
   * @member {string} [thumbnail.imageId] Unique Id for the image.
   * @member {string} [thumbnail.accentColor] A three-byte hexadecimal number
   * that represents the color that dominates the image. Use the color as the
   * temporary background in your client until the image is loaded.
   * @member {string} [thumbnail.visualWords] For interal use only.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Query
   *
   * @returns {object} metadata of Query
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Query',
      type: {
        name: 'Composite',
        className: 'Query',
        modelProperties: {
          text: {
            required: true,
            serializedName: 'text',
            type: {
              name: 'String'
            }
          },
          displayText: {
            required: false,
            readOnly: true,
            serializedName: 'displayText',
            type: {
              name: 'String'
            }
          },
          webSearchUrl: {
            required: false,
            readOnly: true,
            serializedName: 'webSearchUrl',
            type: {
              name: 'String'
            }
          },
          searchLink: {
            required: false,
            readOnly: true,
            serializedName: 'searchLink',
            type: {
              name: 'String'
            }
          },
          thumbnail: {
            required: false,
            readOnly: true,
            serializedName: 'thumbnail',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: '_type',
                clientName: '_type'
              },
              uberParent: 'ResponseBase',
              className: 'ImageObject'
            }
          }
        }
      }
    };
  }
}

module.exports = Query;
