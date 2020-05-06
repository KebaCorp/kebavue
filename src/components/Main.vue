<template>
  <kv-flex column>

    <!--Toolbar-->
    <kv-flex-item>
      <kv-toolbar>

        <!--Logo-->
        <kv-toolbar-logo
          :to="{ name: 'main' }"
          text="DSFsd"
          image="./img/logo.png"
        />

        <kv-flex-spacer/>

        <!--Input-->
        <kv-toolbar-item>
          <kv-input></kv-input>
        </kv-toolbar-item>

        <!--Button-->
        <kv-toolbar-item>
          <kv-button>Button</kv-button>
        </kv-toolbar-item>

      </kv-toolbar>
    </kv-flex-item>

    <!--Button-->
    <kv-flex-item class="pg-1">
      <kv-button>
        Button
      </kv-button>
    </kv-flex-item>

    <!--Table-->
    <kv-flex-item full-width class="pg-1">
      <kv-table>
        <kv-table-head>
          <kv-table-tr>
            <kv-table-td
              v-for="tableTitle in tableTitles"
              :key="tableTitle.value"
            >
              {{ tableTitle.value }}
            </kv-table-td>
          </kv-table-tr>
        </kv-table-head>
        <kv-table-body>
          <kv-table-tr
            v-for="tableItem in tableItems"
            :key="tableItem.id"
          >
            <kv-table-td
              v-for="(tableColumn, index) in tableItem"
              :key="index"
            >
              {{ tableColumn }}
            </kv-table-td>
          </kv-table-tr>
        </kv-table-body>
      </kv-table>
    </kv-flex-item>

    <!--Pagination-->
    <kv-flex-item>
      <kv-pagination
        :count="20"
        :limit="10"
        :offset="10"
      />
    </kv-flex-item>

  </kv-flex>
</template>

<script>
export default {
  name: 'Main',
  data: () => ({
    tableTitles: [
      {
        value: 'ID'
      },
      {
        value: 'Name'
      },
      {
        value: 'Is active'
      },
      {
        value: 'Age'
      }
    ],
    tableItems: [
      {
        id: 1,
        name: 'Brad',
        isActive: 'No',
        age: 50
      },
      {
        id: 2,
        name: 'John',
        isActive: 'Yes',
        age: 60
      },
      {
        id: 3,
        name: 'John',
        isActive: 'Yes',
        age: 60
      },
      {
        id: 4,
        name: 'John',
        isActive: 'Yes',
        age: 60
      },
      {
        id: 5,
        name: 'John',
        isActive: 'Yes',
        age: 60
      },
      {
        id: 6,
        name: 'John',
        isActive: 'Yes',
        age: 60
      },
      {
        id: 7,
        name: 'John',
        isActive: 'Yes',
        age: 60
      },
      {
        id: 8,
        name: 'John',
        isActive: 'Yes',
        age: 60
      },
      {
        id: 9,
        name: 'John',
        isActive: 'Yes',
        age: 60
      },
      {
        id: 10,
        name: 'John',
        isActive: 'Yes',
        age: 60
      }
    ]
  })
}
</script>

<style scoped>

</style>
