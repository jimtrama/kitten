import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

const time = 400;
export const slideInAnimation = trigger('routeAnimations', [
  transition('LoginPage => HomePage', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
      }),
    ]),
    query(':enter', [style({ left: '100%' })], { optional: true }),
    query(':leave', style({ left: '0' }), { optional: true }),
    group([
      query(
        ':leave',
        [animate(`${time}ms ease-out`, style({ left: '-100%' }))],
        { optional: true }
      ),
      query(':enter', [animate(`${time}ms ease-out`, style({ left: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),
  transition('HomePage => LoginPage', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })], { optional: true }),
    query(':leave', style({ left: '0' }), { optional: true }),
    group([
      query(
        ':leave',
        [animate(`${time}ms ease-out`, style({ left: '100%' }))],
        { optional: true }
      ),
      query(':enter', [animate(`${time}ms ease-out`, style({ left: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),
]);

export const slideInAnimationIn = trigger('routeAnimations', [
  transition('* => AccountPage', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
      }),
    ]),
    query(':enter', [style({ left: '100%' })], { optional: true }),
    query(':leave', style({ left: '0' }), { optional: true }),
    group([
      query(
        ':leave',
        [animate(`${time}ms ease-out`, style({ left: '-100%' }))],
        { optional: true }
      ),
      query(':enter', [animate(`${time}ms ease-out`, style({ left: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),
  transition('AccountPage => *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })], { optional: true }),
    query(':leave', style({ left: '0' }), { optional: true }),
    group([
      query(
        ':leave',
        [animate(`${time}ms ease-out`, style({ left: '100%' }))],
        { optional: true }
      ),
      query(':enter', [animate(`${time}ms ease-out`, style({ left: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),
  transition('VehiclesPage => MusicPage', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
      }),
    ]),
    query(':enter', [style({ left: '100%' })], { optional: true }),
    query(':leave', style({ left: '0' }), { optional: true }),
    group([
      query(
        ':leave',
        [animate(`${time}ms ease-out`, style({ left: '-100%' }))],
        { optional: true }
      ),
      query(':enter', [animate(`${time}ms ease-out`, style({ left: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),
  transition('MusicPage => VehiclesPage', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })], { optional: true }),
    query(':leave', style({ left: '0' }), { optional: true }),
    group([
      query(
        ':leave',
        [animate(`${time}ms ease-out`, style({ left: '100%' }))],
        { optional: true }
      ),
      query(':enter', [animate(`${time}ms ease-out`, style({ left: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),
  transition('VehiclesPage => ShopPage', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
      }),
    ]),
    query(':enter', [style({ left: '100%' })], { optional: true }),
    query(':leave', style({ left: '0' }), { optional: true }),
    group([
      query(
        ':leave',
        [animate(`${time}ms ease-out`, style({ left: '-100%' }))],
        { optional: true }
      ),
      query(':enter', [animate(`${time}ms ease-out`, style({ left: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),
  transition('ShopPage => VehiclesPage', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })], { optional: true }),
    query(':leave', style({ left: '0' }), { optional: true }),
    group([
      query(
        ':leave',
        [animate(`${time}ms ease-out`, style({ left: '100%' }))],
        { optional: true }
      ),
      query(':enter', [animate(`${time}ms ease-out`, style({ left: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),
  transition('WashPage => ShopPage', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
      }),
    ]),
    query(':enter', [style({ left: '100%' })], { optional: true }),
    query(':leave', style({ left: '0' }), { optional: true }),
    group([
      query(
        ':leave',
        [animate(`${time}ms ease-out`, style({ left: '-100%' }))],
        { optional: true }
      ),
      query(':enter', [animate(`${time}ms ease-out`, style({ left: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),
  transition('ShopPage => WashPage', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })], { optional: true }),
    query(':leave', style({ left: '0' }), { optional: true }),
    group([
      query(
        ':leave',
        [animate(`${time}ms ease-out`, style({ left: '100%' }))],
        { optional: true }
      ),
      query(':enter', [animate(`${time}ms ease-out`, style({ left: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),
  transition('WashPage => MusicPage', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
      }),
    ]),
    query(':enter', [style({ left: '100%' })], { optional: true }),
    query(':leave', style({ left: '0' }), { optional: true }),
    group([
      query(
        ':leave',
        [animate(`${time}ms ease-out`, style({ left: '-100%' }))],
        { optional: true }
      ),
      query(':enter', [animate(`${time}ms ease-out`, style({ left: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),
  transition('MusicPage => WashPage', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })], { optional: true }),
    query(':leave', style({ left: '0' }), { optional: true }),
    group([
      query(
        ':leave',
        [animate(`${time}ms ease-out`, style({ left: '100%' }))],
        { optional: true }
      ),
      query(':enter', [animate(`${time}ms ease-out`, style({ left: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),
  transition('ShopPage => MusicPage', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
      }),
    ]),
    query(':enter', [style({ left: '100%' })], { optional: true }),
    query(':leave', style({ left: '0' }), { optional: true }),
    group([
      query(
        ':leave',
        [animate(`${time}ms ease-out`, style({ left: '-100%' }))],
        { optional: true }
      ),
      query(':enter', [animate(`${time}ms ease-out`, style({ left: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),
  transition('MusicPage => ShopPage', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })], { optional: true }),
    query(':leave', style({ left: '0' }), { optional: true }),
    group([
      query(
        ':leave',
        [animate(`${time}ms ease-out`, style({ left: '100%' }))],
        { optional: true }
      ),
      query(':enter', [animate(`${time}ms ease-out`, style({ left: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),
  transition('WashPage => VehiclesPage', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })], { optional: true }),
    query(':leave', style({ left: '0' }), { optional: true }),
    group([
      query(
        ':leave',
        [animate(`${time}ms ease-out`, style({ left: '100%' }))],
        { optional: true }
      ),
      query(':enter', [animate(`${time}ms ease-out`, style({ left: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),
  transition('VehiclesPage => WashPage', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
      }),
    ]),
    query(':enter', [style({ left: '100%' })], { optional: true }),
    query(':leave', style({ left: '0' }), { optional: true }),
    group([
      query(
        ':leave',
        [animate(`${time}ms ease-out`, style({ left: '-100%' }))],
        { optional: true }
      ),
      query(':enter', [animate(`${time}ms ease-out`, style({ left: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),
]);
