import { Model, createServer } from "miragejs"
import { SCHOOL_DETAIL } from "../__test__/mocks/mockData"
import { SCHOOL_SEARCH } from "../__test__/mocks/mockDataSearch"

createServer({
  models: {
    school: Model
  },

  routes() {
    this.namespace = "api"

    this.get(
      "/schools",
      (schema, request) => {
        // return schema.schools.all()
        return SCHOOL_DETAIL
      },
      { timing: 1000 }
    )

    this.get(
      "/schools/:id",
      (schema, request) => {
        let id = request.params.id

        // return schema.schools.find(id)
        return SCHOOL_SEARCH[id]
      },
      { timing: 1000 }
    )

    this.post("/schools", (schema, request) => {
      let attrs = JSON.parse(request.requestBody)

      return schema.schools.create(attrs)
    })

    this.patch("/schools/:id", (schema, request) => {
      let newAttrs = JSON.parse(request.requestBody)
      let id = request.params.id
      let movie = schema.schools.find(id)

      return movie.update(newAttrs)
    })

    this.delete("/schools/:id", (schema, request) => {
      let id = request.params.id

      return schema.schools.find(id).destroy()
    })

    this.passthrough()
  }
})
