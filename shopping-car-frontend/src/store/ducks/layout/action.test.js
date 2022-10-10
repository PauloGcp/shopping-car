import { Types, hideMessage, showMessage } from './index'

describe('Layout Actions ', () => {
    describe("Action Types", () => {
        test("deve retornar a action type SHOw_MESSAGE", ()=>{
            expect(Types.SHOW_MESSAGE).toEqual("SHOW_MESSAGE")
        })
        test("deve retornar a action type HIDE_MESSAGE", ()=>{
            expect(Types.HIDE_MESSAGE).toEqual("HIDE_MESSAGE")
        })
    })
    describe("Action Creators", () => {
        test("Deve retornar a action creator showMessage {type: SHOW_MESSAGE}", () =>{
            expect(showMessage()).toEqual({type: Types.SHOW_MESSAGE})
        })
        test("Deve retornar a action creator hideMessage {type: HIDE_MESSAGE}", () =>{
            expect(hideMessage()).toEqual({type: Types.HIDE_MESSAGE})
        })
    })
})