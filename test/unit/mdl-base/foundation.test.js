/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import test from 'ava';
import {MDLFoundation} from '../../../packages/mdl-base';

class FakeFoundation extends MDLFoundation {
  get adapter() {
    return this.adapter_;
  }
}

test('cssClasses getter returns an empty object', t => {
  t.deepEqual(MDLFoundation.cssClasses, {});
});

test('strings getter returns an empty object', t => {
  t.deepEqual(MDLFoundation.strings, {});
});

test('numbers getter returns an empty object', t => {
  t.deepEqual(MDLFoundation.numbers, {});
});

test('defaultAdapter getter returns an empty object', t => {
  t.deepEqual(MDLFoundation.defaultAdapter, {});
});

test('takes an adapter object in its constructor, assigns it to "adapter_"', t => {
  const adapter = {adapter: true};
  const f = new FakeFoundation(adapter);
  t.deepEqual(f.adapter, adapter);
});

test('assigns adapter to an empty object when none given', t => {
  const f = new FakeFoundation();
  t.deepEqual(f.adapter, {});
});

test('provides an init() lifecycle method, which defaults to a no-op', () => {
  const f = new FakeFoundation();
  f.init();
});

test('provides a destroy() lifecycle method, which defaults to a no-op', () => {
  const f = new FakeFoundation();
  f.destroy();
});
