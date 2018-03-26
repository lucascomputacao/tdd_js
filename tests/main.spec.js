import {expect} from 'chai';
import{fizzBuzz} from '../src/main';

describe('Main', function(){
  it('should return `Fizz` when multiple of 3', function(){

    expect(fizzBuzz(3)).to.be.equal('Fizz');
  })
  it('should return `Buzz` when multiple of 5', function(){

    expect(fizzBuzz(5)).to.be.equal('Buzz');
  })
  it('should return `FizzBuzz` when multiple of 5 and 3', function(){

    expect(fizzBuzz(15)).to.be.equal('FizzBuzz');
  })
  it('should return the number when not multiple of 5 and 3', function(){

    expect(fizzBuzz(8)).to.be.equal(8);
  })
  it('should return the number when number equals 0', function(){
    expect(fizzBuzz(0)).to.be.equal(0);
  })
});
