import Application from 'ember-mabox-gl-pnpm-repro/app';
import config from 'ember-mabox-gl-pnpm-repro/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
