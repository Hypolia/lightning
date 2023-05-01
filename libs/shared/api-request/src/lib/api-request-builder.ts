import Axios from 'axios'
import * as process from "process";

type Field = { [key: string]: never }

const API_ENDPOINT: string = process.env ? process.env['API_ENDPOINT'] as string : 'http://localhost:3333/v1'

export class ApiRequestBuilder {
    public get (url: string) {
      return new GetRequest(API_ENDPOINT + url)
    }
  
    public post (url: string) {
      return new PostRequest(API_ENDPOINT + url)
    }
  
    public put (url: string) {
      return new PutRequest(API_ENDPOINT + url)
    }
  
    public destroy (url: string) {
      return new DestroyRequest(API_ENDPOINT + url)
    }
  }
  
  class GetRequest {
    private _headers: { [key: string]: string } = {}
  
    constructor (private url: string) {
    }
  
    public headers (headers: { [key: string]: string }) {
      this._headers = headers
      return this
    }
  
    public build () {
      return Axios.get(this.url, {
        headers: this._headers,
        withCredentials: true
      })
    }
  }
  
  class PostRequest {
    private _headers: { [key: string]: string } = {}
    private _formData: FormData = new FormData()
    private _fields: any = {}
  
    constructor (private url: string) {}
  
    public formData (fields: Field): PostRequest {
      Object.entries(fields).forEach(([key, value]) => {
        this._formData.set(key, value)
      })
  
      return this
    }
  
    public fields (fields: any): PostRequest {
      Object.entries(fields).forEach(([key, value]) => {
        this._fields[key] = value
      })
  
      return this
    }
  
    public headers (headers: { [key: string]: string }) {
      this._headers = headers
      return this
    }
  
    public build () {
      return Axios.post(this.url, Object.keys(this._fields).length ? this._fields : this._formData, {
        headers: this._headers,
        withCredentials: true
      })
    }
  }
  
  class PutRequest {
    private _headers: { [key: string]: string } = {}
    private _formData: FormData = new FormData()
    private _fields: any = {}
  
    constructor (private url: string) {
    }
  
    public formData (fields: Field): PutRequest {
      Object.entries(fields).forEach(([key, value]) => {
        this._formData.set(key, value)
      })
  
      return this
    }
  
    public fields (fields: any): PutRequest {
      Object.entries(fields).forEach(([key, value]) => {
        this._fields[key] = value
      })
  
      return this
    }
  
    public headers (headers: { [key: string]: string }) {
      this._headers = headers
      return this
    }
  
    public build () {
      return Axios.put(this.url, Object.keys(this._fields).length ? this._fields : this._formData, {
        headers: this._headers,
        withCredentials: true
      })
    }
  }
  
  class DestroyRequest {
    private _headers: { [key: string]: string } = {}
  
    constructor (private url: string) {
    }
  
    public headers (headers: { [key: string]: string }) {
      this._headers = headers
      return this
    }
  
    public build () {
      return Axios.delete(this.url, {
        headers: this._headers,
        withCredentials: true
      })
    }
  }