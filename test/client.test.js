'use strict';

const expect = require('chai').expect;
const ghost = require('../index');
const OptionsData = require('./data/options');

describe('Client Tests', function () {
    describe('Client Creation', function () {
        it('should throw an error if options is not an object while creating a client', function () {
            const options = OptionsData.invalidClientOptionsDataFormat;

            try {
                const client = ghost.createClient(options);
                expect(client).to.equal(undefined);
            } catch (e) {
                expect(e).to.be.an('string');
            }

        });

        it('should throw an error if endpoint parameter is missing in options', function () {
            const options = OptionsData.invalidClientOptionsWithMissingEndpoint;

            try {
                const client = ghost.createClient(options);
                expect(client).to.equal(undefined);
            } catch (e) {
                expect(e).to.be.an('string');
            }

        });

        it('should throw an error if both token and client data is missing in options', function () {
            const options = OptionsData.invalidClientOptionsWithNoTokenAndClientData;

            try {
                const client = ghost.createClient(options);
                expect(client).to.equal(undefined);
            } catch (e) {
                expect(e).to.be.an('string');
            }

        });

        it('should throw an error if clientId is missing in options', function () {
            const options = OptionsData.invalidClientOptionsWithMissingClientId;

            try {
                const client = ghost.createClient(options);
                expect(client).to.equal(undefined);
            } catch (e) {
                expect(e).to.be.an('string');
            }

        });

        it('should throw an error if clientSecret is missing in options', function () {
            const options = OptionsData.invalidClientOptionsWithMissingClientSecret;

            try {
                const client = ghost.createClient(options);
                expect(client).to.equal(undefined);
            } catch (e) {
                expect(e).to.be.an('string');
            }

        });

        it('should create a client successfully', function () {
            const options = OptionsData.validClientOptionsData;
            const client = ghost.createClient(options);
            expect(client).to.be.an('object');
        });

    });
});