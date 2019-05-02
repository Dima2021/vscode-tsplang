/*
 *  Copyright Tektronix Inc.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
// tslint:disable:no-implicit-dependencies no-unused-expression
import { expect } from 'chai'
// tslint:disable-next-line:no-import-side-effect
import 'mocha'
// tslint:enable:no-implicit-dependencies

import { CompletionItem } from '../../../decorators'
import { CommandSetInterface } from '../../../instrument'

describe('Instrument Provider', () => {
    describe('loadandrunscript', () => {
        let providerModule: CommandSetInterface

        before(() => {
            // tslint:disable-next-line:no-require-imports
            providerModule = require('../../../instrument/provider/loadandrunscript')
        })

        it('does not export "completionDocs"', () => {
            expect(providerModule).to.not.haveOwnProperty('completionDocs')
        })

        it('exports "completions"', () => {
            expect(providerModule).to.haveOwnProperty('completions')
        })

        it('completions are reserved', () => {
            providerModule.completions.forEach((value: CompletionItem) => {
                expect(value.reserved).to.be.true
            })
        })

        it('does not export "signatures"', () => {
            expect(providerModule).to.not.haveOwnProperty('signatures')
        })
    })
})