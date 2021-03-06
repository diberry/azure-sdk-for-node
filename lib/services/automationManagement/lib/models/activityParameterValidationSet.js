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
 * Definition of the activity parameter validation set.
 *
 */
class ActivityParameterValidationSet {
  /**
   * Create a ActivityParameterValidationSet.
   * @member {string} [memberValue] Gets or sets the name of the activity
   * parameter validation set member.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ActivityParameterValidationSet
   *
   * @returns {object} metadata of ActivityParameterValidationSet
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ActivityParameterValidationSet',
      type: {
        name: 'Composite',
        className: 'ActivityParameterValidationSet',
        modelProperties: {
          memberValue: {
            required: false,
            serializedName: 'memberValue',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ActivityParameterValidationSet;
