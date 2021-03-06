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
 * Result of AnalyzeImage operation.
 *
 */
class ImageAnalysis {
  /**
   * Create a ImageAnalysis.
   * @property {array} [categories] An array indicating identified categories.
   * @property {object} [adult] An object describing whether the image contains
   * adult-oriented content and/or is racy.
   * @property {boolean} [adult.isAdultContent] A value indicating if the image
   * contains adult-oriented content.
   * @property {boolean} [adult.isRacyContent] A value indicating if the image
   * is racy.
   * @property {number} [adult.adultScore] Score from 0 to 1 that indicates how
   * much the content is considered adult-oriented within the image.
   * @property {number} [adult.racyScore] Score from 0 to 1 that indicates how
   * suggestive is the image.
   * @property {object} [color] An object providing additional metadata
   * describing color attributes.
   * @property {string} [color.dominantColorForeground] Possible dominant
   * foreground color.
   * @property {string} [color.dominantColorBackground] Possible dominant
   * background color.
   * @property {array} [color.dominantColors] An array of possible dominant
   * colors.
   * @property {string} [color.accentColor] Possible accent color.
   * @property {boolean} [color.isBWImg] A value indicating if the image is
   * black and white.
   * @property {object} [imageType] An object providing possible image types
   * and matching confidence levels.
   * @property {number} [imageType.clipArtType] Confidence level that the image
   * is a clip art.
   * @property {number} [imageType.lineDrawingType] Confidence level that the
   * image is a line drawing.
   * @property {array} [tags] A list of tags with confidence level.
   * @property {object} [description] A collection of content tags, along with
   * a list of captions sorted by confidence level, and image metadata.
   * @property {array} [description.tags] A collection of image tags.
   * @property {array} [description.captions] A list of captions, sorted by
   * confidence level.
   * @property {array} [faces] An array of possible faces within the image.
   * @property {array} [objects] Array of objects describing what was detected
   * in the image.
   * @property {string} [requestId] Id of the REST API request.
   * @property {object} [metadata]
   * @property {number} [metadata.width] Image width, in pixels.
   * @property {number} [metadata.height] Image height, in pixels.
   * @property {string} [metadata.format] Image format.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ImageAnalysis
   *
   * @returns {object} metadata of ImageAnalysis
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ImageAnalysis',
      type: {
        name: 'Composite',
        className: 'ImageAnalysis',
        modelProperties: {
          categories: {
            required: false,
            nullable: true,
            serializedName: 'categories',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CategoryElementType',
                  type: {
                    name: 'Composite',
                    className: 'Category'
                  }
              }
            }
          },
          adult: {
            required: false,
            serializedName: 'adult',
            type: {
              name: 'Composite',
              className: 'AdultInfo'
            }
          },
          color: {
            required: false,
            serializedName: 'color',
            type: {
              name: 'Composite',
              className: 'ColorInfo'
            }
          },
          imageType: {
            required: false,
            serializedName: 'imageType',
            type: {
              name: 'Composite',
              className: 'ImageType'
            }
          },
          tags: {
            required: false,
            nullable: true,
            serializedName: 'tags',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ImageTagElementType',
                  type: {
                    name: 'Composite',
                    className: 'ImageTag'
                  }
              }
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'Composite',
              className: 'ImageDescriptionDetails'
            }
          },
          faces: {
            required: false,
            nullable: true,
            serializedName: 'faces',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'FaceDescriptionElementType',
                  type: {
                    name: 'Composite',
                    className: 'FaceDescription'
                  }
              }
            }
          },
          objects: {
            required: false,
            nullable: true,
            serializedName: 'objects',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DetectedObjectElementType',
                  type: {
                    name: 'Composite',
                    className: 'DetectedObject'
                  }
              }
            }
          },
          requestId: {
            required: false,
            nullable: true,
            serializedName: 'requestId',
            type: {
              name: 'String'
            }
          },
          metadata: {
            required: false,
            serializedName: 'metadata',
            type: {
              name: 'Composite',
              className: 'ImageMetadata'
            }
          }
        }
      }
    };
  }
}

module.exports = ImageAnalysis;
